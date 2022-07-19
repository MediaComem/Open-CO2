import fs from "fs";
import logger from "../config/logger.js";

/**
 * Class to export processed data as JSON file
 * @example const fileExporter = new FileExporter();
 */
class FileExporter {
  /**
   * FileExporter constructor
   * @constructor
   */
  constructor() {}

  /**
   * Save object in a JS file with specified variable name
   * @param {Object} sheet Sheet content as JS object
   * @param {String} fileName Filename (with path) of the exported JSON
   * @param {String} varName Variable name of the array used in generated JS file
   */
  saveAsJsonFile(sheet, fileName, varName) {
    const jsonContent = JSON.stringify(sheet);
    // Save JSON file
    fs.writeFile(
      fileName,
      `var ${varName} = ${jsonContent}`,
      "utf8",
      function (error) {
        if (error) {
          logger.error("An error occured while writing JSON file…");
          return logger.error(error);
        }
        logger.info(`${fileName} file has been successfully saved!`);
      }
    );
  }
}

export default FileExporter;
