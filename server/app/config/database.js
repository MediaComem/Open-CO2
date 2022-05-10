import mongoose from "mongoose";
import logger from "./logger.js";

// Mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Init DB
export const initDatabase = () => {
  mongoose.connection.once("open", function () {
    logger.info("MongoDB event open");
    logger.debug("MongoDB connected [%s]", process.env.MONGO_URI);

    // Events
    mongoose.connection.on("connected", function () {
      logger.info("MongoDB event connected");
    });

    mongoose.connection.on("disconnected", function () {
      logger.warn("MongoDB event disconnected");
    });

    mongoose.connection.on("reconnected", function () {
      logger.info("MongoDB event reconnected");
    });

    mongoose.connection.on("error", function (error) {
      logger.error("MongoDB event error: " + error);
    });
  });

  return mongoose.connect(process.env.MONGO_URI, options, function (error) {
    if (error) {
      logger.error("MongoDB connection error: " + error);
      process.exit(1);
    }
  });
};
