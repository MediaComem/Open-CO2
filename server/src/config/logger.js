import { DEFAULT_LOG_LEVEL, DEFAULT_LOG_DIR } from "./default.js";
import * as winston from "winston";
import "winston-daily-rotate-file";

// Transports
// Transport Console
const consoleTransport = new winston.transports.Console();
// Transport File
const fileRotateTransport = new winston.transports.DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  filename: "open-co2_%DATE%.log",
  dirname: process.env.LOG_DIR || DEFAULT_LOG_DIR,
  maxSize: "20m",
  maxFiles: "14d",
  zippedArchive: true
});

// Format
const logFormat = winston.format.combine(
  winston.format.colorize({ all: false }),
  winston.format.timestamp({
    format: "MMM-DD-YYYY HH:mm:ss" // "YYYY-MM-DD hh:mm:ss.SSS A"
  }),
  winston.format.align(),
  winston.format.printf(
    (data) => `${data.timestamp} ${data.level}: ${data.message}`
  )
);

// Config
const logConfig = {
  level: process.env.LOG_LEVEL || DEFAULT_LOG_LEVEL,
  format: logFormat,
  transports: [consoleTransport, fileRotateTransport],
  exitOnError: false
};

// Logger
const logger = winston.createLogger(logConfig);

export default logger;
