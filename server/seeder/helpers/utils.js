/**
 * Format a string to snake_case
 * @param {string} string input string to format
 * @returns {string} output string in snake case format
 * @throws {ParamTypeError} throw error if param isn't a string
 */
export function formatString(string) {
  // If not a string
  if (!(string && (typeof string === "string" || string instanceof String)))
    throw new Error(
      "formatString() must receive a string as an input parameter"
    );
  // Else return formatted string
  return string
    .normalize("NFD") // Normalization form canonical decomposition
    .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters, keep letters and numbers
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/,/g, "") // Remove comma
    .replace(/ /g, "_") // Replace spaces with underscore
    .toLowerCase(); // Convert to lowercase
}

/**
 * Calculate a 32 bit FNV-1a hash
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/ / https://gist.github.com/vaiorabbit/5657561
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as 8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string} hash
 */
export function hashString(string, asString, seed) {
  let hval = seed === undefined ? 0x811c9dc5 : seed;

  for (let i = 0, l = string.length; i < l; i++) {
    hval ^= string.charCodeAt(i);
    hval +=
      (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  if (asString) return ("0000000" + (hval >>> 0).toString(16)).substr(-8); // Convert to 8 digit hex string

  return hval >>> 0;
}

/**
 * Calculate the mean value of a series of numbers
 * @param {Array<number>} numArray the input series of number
 * @param {number} [precision=3] integer to specify the decimal precision of the result
 * @returns {number} mean of the series
 */
export function getMeanFromArray(numArray, precision = 3) {
  const mean = numArray.reduce((a, b) => a + b, 0) / numArray.length;
  return Number(mean.toFixed(precision));
}

/**
 * Calculate the standard deviation (SD) value of a series of numbers
 * @param {Array<number>} numArray the input series of number
 * @param {number} [precision=3] integer to specify the decimal precision of the result
 * @returns {number} standard deviation of the series
 */
export function getDeviationFromArray(numArray, precision = 3) {
  // Mean
  const mean = getMeanFromArray(numArray, 6);

  // Assigning (value - mean) ^ 2 to every array item
  numArray = numArray.map((i) => (i - mean) ** 2);
  // Calculating the sum of updated array
  const sum = numArray.reduce((a, b) => a + b, 0);
  // Variance
  const variance = sum / numArray.length;

  // Deviation
  return Number(Math.sqrt(variance).toFixed(precision));
}
