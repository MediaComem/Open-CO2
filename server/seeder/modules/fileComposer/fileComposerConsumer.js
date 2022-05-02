import FileComposer from "./fileComposer";

export default class FileComposerConsumer {
  constructor() {
    this.fileComposer = new FileComposer();
  }

  constructPath() {
    this.fileComposer.constructPath();
  }
}
