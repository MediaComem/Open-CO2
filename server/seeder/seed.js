import FileReader from "./modules/fileReader/fileReader.js";
import FileComposer from "./modules/fileComposer/fileComposer.js";
import FileExporter from "./modules/fileExporter/fileExporter.js";

// Excel file used as input
const inputFile = "./data/input/Open CO2.xlsx";

// Read file
const fileReader = new FileReader(inputFile);

const electricityData = fileReader.getSheetContent("Electricity");
const heatData = fileReader.getSheetContent("Heat");
const transportsData = fileReader.getSheetContent("Transports");

const consolidatedCategories = [];
let fileComposer = new FileComposer(electricityData);
consolidatedCategories.push(...fileComposer.sheet);
fileComposer = new FileComposer(heatData);
consolidatedCategories.push(...fileComposer.sheet);
fileComposer = new FileComposer(transportsData);
consolidatedCategories.push(...fileComposer.sheet);

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

// Save JSON file
const fileExporter = new FileExporter();
// fileExporter.saveAsJsonFile(consolidatedCategories, "populate/categories.json");
fileExporter.saveAsJsonFile(
  consolidatedCategories,
  "data/output/categories.json"
);

// !TODO: Add generic method to generate JSON from X sheets
