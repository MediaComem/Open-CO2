import XLSX from "xlsx";

/**
 * Class to read XLS file and extract sheets content
 */
export default class XLSDataReader {
  #workbook;
  /**
   * XLSDataReader constructor
   * @param {string} xlsFile path to XLS file
   */
  constructor(xlsFile) {
    this.file = xlsFile;
    this.#workbook = XLSX.readFile(this.file);
  }

  /**
   * Return sheets content from XLS
   * @returns {Array} Array with sheets content
   */
  getSheets() {
    const sheets = this.#workbook.Sheets;
    return sheets;
  }

  /**
   * Return sheets name from XLS
   * @returns {Array} Array of string with sheets name
   */
  getSheetNames() {
    const sheetNames = this.#workbook.SheetNames;
    return sheetNames;
  }

  /**
   * Return a single sheet.
   * First sheet OR sheet with name passed as argument as JSON
   * @param {string} sheet
   * @returns {Array} Sheet content as an array of rows
   */
  getSheetContent(sheet) {
    let data;
    if (sheet) {
      // Get defined sheet
      data = XLSX.utils.sheet_to_json(this.#workbook.Sheets[sheet]);
    } else {
      // Or get first sheet
      const sheetList = this.#workbook.SheetNames;
      data = XLSX.utils.sheet_to_json(this.#workbook.Sheets[sheetList[0]]);
    }
    return data;
  }
}
