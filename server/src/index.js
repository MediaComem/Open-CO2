import dotenv from "dotenv";
dotenv.config();
import {
  DEFAULT_PORT,
  DEFAULT_ENDPOINT,
  DEFAULT_APOLLO_INTROSPECTION,
  DEFAULT_APOLLO_PLAYGROUND
} from "./config/default.js";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
// import logger from "./config/logger.js";
// Database
import { initDatabase } from "./config/database.js";
// GraphQL
import { typeDefs } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";

async function startServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection:
      process.env.APOLLO_INTROSPECTION || DEFAULT_APOLLO_INTROSPECTION,
    playground: process.env.APOLLO_PLAYGROUND || DEFAULT_APOLLO_PLAYGROUND,
    path: process.env.ENDPOINT || DEFAULT_ENDPOINT
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: process.env.ENDPOINT || DEFAULT_ENDPOINT
  });

  app.use((req, res) => {
    res.send(
      `<h1>Welcome to Open CO₂!</h1><a href="${
        process.env.ENDPOINT || DEFAULT_ENDPOINT
      }">Explore GraphQL API</a></br>
      <a href="https://github.com/MediaComem/open-co2">GitHub repository</a>`
    );
  });

  // Connect to DB
  await initDatabase();

  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT || DEFAULT_PORT }, resolve)
  );

  console.info(`🚀 Open CO2 server ready!`);
  console.info(
    `GraphQL endpoint at http://localhost:${process.env.PORT || DEFAULT_PORT}${
      server.graphqlPath || DEFAULT_ENDPOINT
    }\n`
  );
}

// Start server
startServer(typeDefs, resolvers);
