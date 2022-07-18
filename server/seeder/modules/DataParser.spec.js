import DataParser from "./DataParser";

/**
 * @test {DataParser}
 */
describe("DataParser", () => {
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
    expect(deepTree.descendants.length).toBe(2);
    expect(deepTree.descendants[0].descendants.length).toBe(1);
    expect(deepTree.descendants[1].descendants.length).toBe(2);
  });
  it("should throw an error if level data invalid", () => {
    const data = [
      { "Level 1": "category", CO2: 1 },
      { "Level 2": "subcategory", "Level 3": "sub-subcategory", CO2: 2 }, // 2 subcategories
      { "Level 3": "sub-subcategory", CO2: 3 }
    ];
    expect(() => DataParser.validate(data, 5)).toThrow();
  });
  it("should throw an error if CO2 data invalid", () => {
    const data = [
      { "Level 1": "category", CO2: 1 },
      { "Level 2": "subcategory", CO2: "3kg" }, // Nan value
      { "Level 3": "sub-subcategory", CO2: 3 }
    ];
    expect(() => DataParser.validate(data, 5)).toThrow();
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
  /**
   * @test {DataParser#processCategories}
   */
  it("should parse correctly subcategories", () => {
    const data = [
      { "Level 1": "category", CO2: undefined },
      { "Level 2": "subcategory", CO2: 1 }
    ];
    const dataParser = new DataParser(data);
    dataParser.process();
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
