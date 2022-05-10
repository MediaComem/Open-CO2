import XLSDataReader from "./modules/XLSDataReader/XLSDataReader.js";
import DataParser from "./modules/DataParser/DataParser.js";
import FileExporter from "./modules/fileExporter/fileExporter.js";

// Excel file used as input
const inputFile = "./data/input/Open CO2.xlsx";

// Read file
const xlsDataReader = new XLSDataReader(inputFile);

const categoriesConfig = {
  fileName: "data/output/categories.js",
  varName: "categoriesData",
  sheets: ["Electricity", "Heat", "Transports"]
};

const unitsConfig = {
  fileName: "data/output/units.js",
  varName: "unitsData",
  sheets: ["Units"]
};

function processCategoriesFromConfig(config) {
  let consolidatedData = [];

  for (let i = 0, l = config.sheets.length; i < l; i++) {
    const sheetName = config.sheets[i];
    const rawContent = xlsDataReader.getSheetContent(sheetName);
    const dataParser = new DataParser(rawContent);
    // Start processing sheet
    dataParser.processCategories();
    consolidatedData.push(...dataParser.sheet);
  }

  // Save JSON file
  const fileExporter = new FileExporter();
  fileExporter.saveAsJsonFile(
    consolidatedData,
    config.fileName,
    config.varName
  );
}

// Generate categories file
processCategoriesFromConfig(categoriesConfig);

// Generate units file
const rawContent = xlsDataReader.getSheetContent(unitsConfig.sheets[0]);
const dataParser = new DataParser(rawContent);
// Start processing sheet
dataParser.processUnits();

// Save JSON file
const fileExporter = new FileExporter();
fileExporter.saveAsJsonFile(
  [...dataParser.sheet],
  unitsConfig.fileName,
  unitsConfig.varName
);

// console.dir(consolidatedCategories, { deep: null });
// import util from "util";
// console.log(
//   util.inspect(consolidatedCategories, {
//     depth: null,
//     showHidden: false,
//     colors: true
//   })
// );
// console.log(`Number of categories: ${consolidatedCategories.length}`);
