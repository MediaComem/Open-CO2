import fs from "fs";

export default class FileExporter {
  constructor() {}

  saveAsJsonFile(sheet, fileName) {
    const jsonContent = JSON.stringify(sheet);

    fs.writeFile(`./data/${fileName}`, jsonContent, "utf8", function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File");
        return console.log(err);
      }

      console.log(`${fileName} file has been saved`);
    });
  }
}
