import FileExporter from "./fileExporter";

export default class FileExporterConsumer {
  constructor() {
    this.fileExporter = new FileExporter();
  }

  saveAsJsonFile() {
    return this.saveAsJsonFile(fileComposer.sheet, "categories.json");
  }
}
