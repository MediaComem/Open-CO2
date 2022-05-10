import dotenv from "dotenv";
dotenv.config();

// Load defined env vars or fallback to default values
process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.LOG_LEVEL = process.env.LOG_LEVEL || "info";
process.env.LOG_DIR = process.env.LOG_DIR || "logs/";
process.env.PORT = process.env.PORT || 4000;
process.env.GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "/graphql";
process.env.REST_BASE = process.env.REST_BASE || "/rest";
process.env.REST_DEPTH = process.env.REST_DEPTH || 1;
process.env.MONGO_URI = process.env.MONGO_URI || "mongodb://database:27017/open-co2";
process.env.APOLLO_INTROSPECTION = process.env.APOLLO_INTROSPECTION || true;
process.env.APOLLO_PLAYGROUND = process.env.APOLLO_PLAYGROUND || true;
