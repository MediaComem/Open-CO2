import FileComposer from "./DataParser";
import FileComposerConsumer from "./DataParserConsumer";
jest.mock("./fileComposer");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods
  FileComposer.mockClear();
});

describe("FileComposer", () => {
  it("consumer should call FileComposer class constructor at least once", () => {
    const fileComposerConsumer = new FileComposerConsumer();
    expect(FileComposer).toHaveBeenCalledTimes(1);
  });
});
