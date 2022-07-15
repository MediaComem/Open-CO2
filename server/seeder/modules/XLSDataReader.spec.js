import XLSDataReader from "./XLSDataReader";

describe("XLSDataReader", () => {
  const xlsDataReader = new XLSDataReader("./data/input/Open CO2.xlsx");
  it("getSheets() should return an array", () => {
    const sheets = xlsDataReader.getSheets();
    expect(Array.isArray(sheets));
  });
  it("getSheetNames() should return an array", () => {
    const sheetNames = xlsDataReader.getSheetNames();
    expect(Array.isArray(sheetNames));
  });
  it("getSheetNames() should return XLS sheets name correctly", () => {
    const sheetNames = xlsDataReader.getSheetNames();
    expect(sheetNames).toEqual(["Electricity", "Heat", "Transports", "Units"]);
  });
  it("getSheetContent() should return an array", () => {
    const sheetContent = xlsDataReader.getSheetContent();
    expect(Array.isArray(sheetContent));
  });
  it("getSheetContent() should return specified sheet or first one by default", () => {
    let sheetContent = xlsDataReader.getSheetContent();
    expect(sheetContent[0]["Level 1"]).toEqual("Electricity");
    sheetContent = xlsDataReader.getSheetContent("Heat");
    expect(sheetContent[0]["Level 1"]).toEqual("Heat");
  });
});
