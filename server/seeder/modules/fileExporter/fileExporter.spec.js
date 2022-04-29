import FileExporter from "./fileExporter";
import FileExporterConsumer from "./fileExporterConsumer";
jest.mock("./fileExporter");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods
  FileExporter.mockClear();
});

describe("FileExporter", () => {
  it("consumer should call FileExporter class constructor at least once", () => {
    const fileExporterConsumer = new FileExporterConsumer();
    expect(FileExporter).toHaveBeenCalledTimes(1);
  });
});
