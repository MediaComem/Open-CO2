import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
// GraphQL schema
import { typeDefs } from "./schema/types.js";
import { resolvers } from "./schema/resolvers.js";
import { mocks } from "./schema/mocks.js";

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
    mockEntireSchema: false,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app, path: process.env.ENDPOINT });

  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  console.info(`\n🚀 Open CO2 server ready!`);
  console.info(
    `GraphQL endpoint at http://localhost:${process.env.PORT}${server.graphqlPath}\n`
  );
}

// Start server
startApolloServer(typeDefs, resolvers);
