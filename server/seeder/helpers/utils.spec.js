import {
  formatString,
  hashString,
  getMeanFromArray,
  getDeviationFromArray
} from "./utils.js";

beforeEach(() => {});

describe("Utils formatString()", () => {
  it("should correctly format string", () => {
    const inputString =
      "Un nom de catégorie, avec différents caractères (5p€ciaux)…";
    expect(formatString(inputString)).toBe(
      "un_nom_de_categorie_avec_differents_caracteres_5pciaux"
    );
  });
  it("should only accept string as param", () => {
    const inputString = "Open CO2";
    const inputNumber = 42;
    const inputObject = {};
    const inputBoolean = true;
    expect(() => formatString(inputString).not.toThrow());
    expect(() => formatString(inputNumber).toThrow());
    expect(() => formatString(inputObject).toThrow());
    expect(() => formatString(inputBoolean).toThrow());
  });
});

describe("Utils hashString()", () => {
  it("should generate different hash from different strings", () => {
    const string1 = "foo";
    const string2 = "bar";
    expect(hashString(string1)).not.toEqual(hashString(string2));
  });
  it("should return an integer or a string (depending on asString flag)", () => {
    const string = "foo";
    expect(typeof hashString(string)).toBe("number");
    expect(typeof hashString(string, true)).toBe("string");
  });
});

describe("Utils getMeanFromArray()", () => {
  it("should correctly calculate the mean of a number serie", () => {
    const data = [4, 2, 3]; // (4+2+3)/3 = 9/3 = 3
    expect(getMeanFromArray(data)).toEqual(3);
  });
  it("should return mean with defined precision", () => {
    const data = [4, 2, 1]; // (4+2+1)/3 = 7/3 = 2.3333333333333335
    expect(getMeanFromArray(data)).toEqual(2.333); // Default precision to 3
    expect(getMeanFromArray(data, 1)).toEqual(2.3);
  });
});

describe("Utils getDeviationFromArray()", () => {
  // https://www.calculator.net/standard-deviation-calculator.html
  it("should correctly calculate the standard deviation of a number serie", () => {
    const data1 = [0, 10]; // 5
    expect(getDeviationFromArray(data1)).toEqual(5);
    // With int/float mix
    const data2 = [0, 1.2, 3.4, 5.6, 7.8, 9, 10]; // 3.5981854837557
    expect(getDeviationFromArray(data2)).toEqual(3.598);
  });
  it("should return mean with defined precision", () => {
    const data = [0, 10, 15, 20]; // 7.395 - 7.4
    expect(getDeviationFromArray(data)).toEqual(7.395); // Default precision to 3
    expect(getDeviationFromArray(data, 1)).toEqual(7.4);
  });
});
