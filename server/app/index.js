import dotenv from "dotenv";
dotenv.config();
import {
  NODE_ENV,
  DEFAULT_PORT,
  DEFAULT_GRAPHQL_ENDPOINT,
  DEFAULT_REST_BASE,
  DEFAULT_APOLLO_INTROSPECTION,
  DEFAULT_APOLLO_PLAYGROUND
} from "./config/default.js";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useSofa } from "sofa-api";
import express from "express";
import http from "http";
import path from "path";
const rootPath = path.resolve();
import { readFile } from "fs/promises";
const pkg = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
// Database
import { initDatabase } from "./config/database.js";
// GraphQL
import { typeDefs } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";

/**
 * Main function to init and start server
 */
async function startServer() {
  const app = express();
  const router = express.Router();

  // GraphQL schema
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  // Used by ApolloServerPluginDrainHttpServer - See https://www.apollographql.com/docs/apollo-server/api/plugin/drain-http-server/
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    formatError: (error) => ({
      name: error.name,
      message: error.message.replace("Error", "")
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection:
      process.env.APOLLO_INTROSPECTION || DEFAULT_APOLLO_INTROSPECTION,
    playground: process.env.APOLLO_PLAYGROUND || DEFAULT_APOLLO_PLAYGROUND,
    path: process.env.GRAPHQL_ENDPOINT || DEFAULT_GRAPHQL_ENDPOINT
  });

  await server.start();

  // View engine setup
  app.set("views", path.join(rootPath, "./views"));
  app.set("view engine", "pug");
  app.use(express.static(path.join(rootPath, "./public")));

  function creditYears() {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2022) return `2022-${currentYear}`;
    else return currentYear;
  }

  // Get environment value
  const environment = process.env.NODE_ENV || NODE_ENV;

  // Landing page route
  router.get("/", (req, res) => {
    res.render("index", {
      version: pkg.version,
      environment: environment.charAt(0).toUpperCase() + environment.slice(1), // Capitalize first letter
      creditYears: creditYears()
    });
  });

  // Use Express in Apollo server
  server.applyMiddleware({
    app,
    path: process.env.GRAPHQL_ENDPOINT || DEFAULT_GRAPHQL_ENDPOINT
  });

  router.use(
    process.env.REST_BASE || DEFAULT_REST_BASE,
    useSofa({
      basePath: process.env.REST_BASE || DEFAULT_REST_BASE,
      schema,
      depthLimit: 3
    })
  );
  app.use("/", router);

  // Connect to DB
  await initDatabase();

  // Start Express server
  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT || DEFAULT_PORT }, resolve)
  );

  console.info(`\n🚀 Open CO2 server ready!`);
  console.info(
    `Homepage at http://localhost:${process.env.PORT || DEFAULT_PORT}\n`
  );
}

// Start server
startServer();
