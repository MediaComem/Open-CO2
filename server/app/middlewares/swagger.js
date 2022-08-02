import * as swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";
import logger from "../config/logger.js";

const swaggerServe = swaggerUi.serve;

const loadSwaggerDocumentation = async () => {
  try {
    const swaggerJSON = await readFile(new URL("../swagger.json", import.meta.url))
    const swaggerDocument = JSON.parse(swaggerJSON);
    return swaggerUi.setup(swaggerDocument);
  } catch (e) {
    logger.error("Missing swagger document file")
  }
}

export { swaggerServe, loadSwaggerDocumentation };
