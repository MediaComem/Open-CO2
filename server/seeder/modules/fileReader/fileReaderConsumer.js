import FileReader from "./fileReader";

export default class FileReaderConsumer {
  constructor() {
    this.fileReader = new FileReader("../../data/Open CO2.xlsx");
  }

  getSheetContent() {
    return this.fileReader.getSheetContent();
  }

  getElectricitySheet() {
    return this.fileReader.getSheetContent("Electricity");
  }
  getHeatSheet() {
    return this.fileReader.getSheetContent("Heat");
  }
}
