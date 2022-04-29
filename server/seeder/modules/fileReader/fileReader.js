import XLSX from "xlsx";

export default class FileReader {
  /**
  Path to an XLS source file as argument
  */
  constructor(file) {
    this.file = file;
  }

  getSheets() {
    const workbook = XLSX.readFile(this.file);
    const sheets = workbook.Sheets;

    return sheets;
  }

  getSheetNames() {
    const workbook = XLSX.readFile(this.file);
    const sheetNames = workbook.SheetNames;

    return sheetNames;
  }

  /**
  Return first sheet OR sheet with name passed as argument as JSON
  */
  getSheetContent(sheet) {
    const workbook = XLSX.readFile(this.file);

    function format_column_name(name) {
      return name.replace(/\s/g, "_");
    }

    const sheetOptions = {
      // header: ["sheet", "js"],
      // range: 1
    };

    let data;
    if (sheet) {
      // Get defined sheet
      data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], sheetOptions);
    } else {
      // Or get first sheet
      let sheetList = workbook.SheetNames;
      data = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetList[0]],
        sheetOptions
      );
    }

    return data;
  }
}
