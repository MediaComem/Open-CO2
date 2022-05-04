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
import path from "path";
const __dirname = path.resolve();
import { readFile } from "fs/promises";
const pkg = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
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

  // View engine setup
  app.set("views", path.join(__dirname, "./views"));
  app.set("view engine", "pug");
  app.use(express.static(path.join(__dirname, "./public")));

  function creditYears() {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2022) return `2022-${currentYear}`;
    else return currentYear;
  }

  const environment = process.env.NODE_ENV;

  // Landing page route
  app.get("/", (req, res) => {
    res.render("index", {
      version: pkg.version,
      environment: environment.charAt(0).toUpperCase() + environment.slice(1),
      creditYears: creditYears()
    });
  });

  // Use Express in Apollo server
  server.applyMiddleware({
    app,
    path: process.env.ENDPOINT || DEFAULT_ENDPOINT
  });

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
startServer(typeDefs, resolvers);
