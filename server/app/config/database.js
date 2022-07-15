import mongoose from "mongoose";
import logger from "./logger.js";

// Mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Init DB
export const initDatabase = () => {
  mongoose.connection.once("open", () => {
    logger.info("MongoDB event open");
    logger.debug("MongoDB connected [%s]", process.env.MONGO_URI);

    // Events
    mongoose.connection.on("connected", () => {
      logger.info("MongoDB connection established");
    });

    mongoose.connection.on("disconnected", () => {
      logger.warn("MongoDB connection disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      logger.info("MongoDB connection reestablished");
    });

    mongoose.connection.on("close", () => {
      logger.warn("MongoDB connection Closed");
    });

    mongoose.connection.on("error", (error) => {
      logger.error("MongoDB connection error: " + error);
    });
  });

  const connectToDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, options);
      logger.info("MongoDB connected");
    } catch (error) {
      logger.error("Failed to connect to MongoDB", error);
      process.exit(1);
    }
  };

  connectToDB();
};
