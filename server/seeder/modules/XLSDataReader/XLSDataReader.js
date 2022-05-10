import XLSX from "xlsx";

/**
 * Class to read XLS file and extract sheets content
 */
export default class XLSDataReader {
  /**
   * XLSDataReader constructor
   * @param {string} xlsFile path to XLS file
   */
  constructor(xlsFile) {
    this.file = xlsFile;
  }

  /**
   * Return sheets content from XLS
   * @returns {Array} Array with sheets content
   */
  getSheets() {
    const workbook = XLSX.readFile(this.file);
    const sheets = workbook.Sheets;
    return sheets;
  }

  /**
   * Return sheets name from XLS
   * @returns {Array} Array of string with sheets name
   */
  getSheetNames() {
    const workbook = XLSX.readFile(this.file);
    const sheetNames = workbook.SheetNames;
    return sheetNames;
  }

  /**
   * Return a single sheet.
   * First sheet OR sheet with name passed as argument as JSON
   * @param {string} sheet
   * @returns {Array} Sheet content as an array of rows
   */
  getSheetContent(sheet) {
    const workbook = XLSX.readFile(this.file);
    let data;
    if (sheet) {
      // Get defined sheet
      data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    } else {
      // Or get first sheet
      const sheetList = workbook.SheetNames;
      data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetList[0]]);
    }
    return data;
  }
}
