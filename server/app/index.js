import "./config/env.js";
import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
// Database
import { initDatabase } from "./config/database.js";
// View engine
import viewEngine from "./config/viewEngine.js";
// Routes
import homeRouter from "./routes/home.js";
// GraphQL + REST API (+ Swagger)
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useSofa, OpenAPI } from "sofa-api";
import * as swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";
const swaggerDocument = JSON.parse(
  await readFile(new URL("./swagger.json", import.meta.url))
);
// Definitions
import { typeDefs } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

/**
 * Main function to init and start server
 */
async function startServer() {
  // Express server
  const app = express();
  // const router = express.Router();
  // Used by ApolloServerPluginDrainHttpServer - See https://www.apollographql.com/docs/apollo-server/api/plugin/drain-http-server/
  const httpServer = http.createServer(app);

  // Apollo server
  const server = new ApolloServer({
    schema,
    formatError: (error) => ({
      name: error.name,
      message: error.message.replace("Error", "")
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: process.env.APOLLO_INTROSPECTION,
    playground: process.env.APOLLO_PLAYGROUND,
    path: process.env.GRAPHQL_ENDPOINT
  });

  // Init view engine
  viewEngine(app);

  // Define routes
  // Server landing page
  app.use("/", homeRouter);
  // REST API
  const openApi = OpenAPI({
    schema,
    info: {
      title: "Open CO2 REST API",
      version: "1.0.0"
    }
  });
  app.use(
    process.env.REST_BASE,
    useSofa({
      schema,
      basePath: process.env.REST_BASE,
      depthLimit: process.env.REST_DEPTH,
      onRoute(info) {
        openApi.addRoute(info, {
          basePath: process.env.REST_BASE
        });
      }
    })
  );
  openApi.save("./swagger.json");
  // openApi.save("./swagger.yml");
  // Server API doc using Swagger
  app.use(
    `${process.env.REST_BASE}/docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );

  // Connect to DB
  await initDatabase();

  // Start Apollo server
  await server.start();

  // Use Express in Apollo server
  server.applyMiddleware({
    app,
    path: process.env.GRAPHQL_ENDPOINT
  });

  // Start Express server
  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );

  console.info(`\n🚀 Open CO2 server ready!`);
  console.info(`Homepage at http://localhost:${process.env.PORT}\n`);
}

// Start server
startServer();
