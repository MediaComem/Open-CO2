import DataParser from "./DataParser";

describe("FileComposer", () => {
  it("should construct correctly deep tree", () => {
    const data = [
      { "Level 1": "category", depth: 1 },
      { "Level 2": "subcategory", depth: 2 },
      { "Level 3": "sub-subcategory", depth: 3 },
      { "Level 2": "subcategory2", depth: 2 },
      { "Level 3": "sub-subcategory2", depth: 3 },
      { "Level 3": "sub-subcategory2", depth: 3 }
    ];
    const dataParser = new DataParser(data);
    const deepTree = dataParser.unitTest("getDeepTree");
    expect(deepTree.children.length).toBe(2);
    expect(deepTree.children[0].children.length).toBe(1);
    expect(deepTree.children[1].children.length).toBe(2);
  });
  it("should throw an error if more than one root node", () => {
    const data = [
      { "Level 1": "category", depth: 1 },
      { "Level 2": "subcategory", depth: 2 },
      { "Level 3": "sub-subcategory", depth: 3 },
      { "Level 1": "category2", depth: 1 },
      { "Level 2": "subcategory2", depth: 2 },
      { "Level 3": "sub-subcategory2", depth: 3 },
      { "Level 3": "sub-subcategory2", depth: 3 }
    ];
    const dataParser = new DataParser(data);
    expect(() => dataParser.unitTest("getDeepTree")).toThrow();
  });
  it("should parse correctly subcategories", () => {
    const data = [{ "Level 1": "category" }, { "Level 2": "subcategory" }];
    const dataParser = new DataParser(data);
    dataParser.processCategories();
    expect(data[0].path).toBe("/");
    expect(data[0].fullPath).toBe("/category");
    expect(data[1].path).toBe("/category");
    expect(data[1].fullPath).toBe("/category/subcategory");
  });
  it("should parse units correctly", () => {
    const data = [
      {
        Type: "FOO",
        Description: "Foo"
      },
      {
        Type: "BAR",
        Description: "Bar"
      }
    ];
    const dataParser = new DataParser(data);
    dataParser.processUnits();
    expect(Array.isArray(data));
    expect(data[0].type).toBe("FOO"); // Turn key to lowercase
    expect(data[1].description).toBe("Bar"); // Turn key to lowercase
    expect(data.length).toBe(2); // Same number of units in input
  });
});
