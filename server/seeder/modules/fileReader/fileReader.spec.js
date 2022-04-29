import FileReader from "./fileReader";
import FileReaderConsumer from "./fileReaderConsumer";
jest.mock("./fileReader");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods
  FileReader.mockClear();
});

describe("FileReader", () => {
  it("consumer should call FileReader class constructor at least once", () => {
    const fileReaderConsumer = new FileReaderConsumer();
    expect(FileReader).toHaveBeenCalledTimes(1);
  });

  it("getSheetContent() to return an array", () => {
    // Show that mockClear() is working
    expect(FileReader).not.toHaveBeenCalled();
    const fileReaderConsumer = new FileReaderConsumer();
    const sheetContent = fileReaderConsumer.getSheetContent();
    expect(Array.isArray(sheetContent));
  });
});
