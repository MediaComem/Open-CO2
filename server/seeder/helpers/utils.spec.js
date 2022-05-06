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
