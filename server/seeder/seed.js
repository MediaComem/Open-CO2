import FileReader from "./modules/fileReader/fileReader.js";
import FileComposer from "./modules/fileComposer/fileComposer.js";
import FileExporter from "./modules/fileExporter/fileExporter.js";

// Excel file used as input
const inputFile = "./data/input/Open CO2.xlsx";

// Read file
const fileReader = new FileReader(inputFile);

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
    const rawContent = fileReader.getSheetContent(sheetName);
    const fileComposer = new FileComposer(rawContent);
    // Start processing sheet
    fileComposer.processCategories();
    consolidatedData.push(...fileComposer.sheet);
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
const rawContent = fileReader.getSheetContent(unitsConfig.sheets[0]);
const fileComposer = new FileComposer(rawContent);
// Start processing sheet
fileComposer.processUnits();

// Save JSON file
const fileExporter = new FileExporter();
fileExporter.saveAsJsonFile(
  [...fileComposer.sheet],
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
