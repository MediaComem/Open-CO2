import FileReader from "./modules/fileReader/fileReader.js";
import FileComposer from "./modules/fileComposer/fileComposer.js";
import FileExporter from "./modules/fileExporter/fileExporter.js";

// Excel file used as input
const inputFile = "./data/Open CO2.xlsx";

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

console.dir(consolidatedCategories, { deep: null });
console.log(`Number of categories: ${consolidatedCategories.length}`);

// const fileComposer = new FileComposer(transportsData);
// fileComposer.processing(transportsData);
// consolidatedCategories.push(...fileComposer.sheet);

// import util from "util";
// console.log(
//   util.inspect(transportsData, { showHidden: false, depth: null, colors: true })
// );

// TODO:
// Save JSON file
const fileExporter = new FileExporter(consolidatedCategories);
fileExporter.saveAsJsonFile(consolidatedCategories, "categories.json");
