function findObjectByKey(array, key, val) {
  return array.find((obj) => obj[key] == val);
}

export function findObjectsFromIds(arrayOfIds, arrayToFilter) {
  let objects = [];
  if (arrayOfIds) {
    arrayOfIds.forEach((id) => {
      let matchingObject = findObjectByKey(arrayToFilter, "id", id);
      objects.push(matchingObject);
    });
  }
  return objects;
}

export function formatString(string) {
  return string
    .normalize("NFD") // Normalization form canonical decomposition
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/,/g, "") // Remove comma
    .replace(/ /g, "_") // Replace spaces with underscore
    .toLowerCase(); // Convert to lowercase
}

export function isArrayEmpty(array) {
  // Not an array
  if (!Array.isArray(array)) {
    return false;
  }
  // Empty array
  if (array.length == 0) {
    return true;
  }
  // Not an empty array
  return false;
}

export function getAverageFromArray(array, precision = 3) {
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  return average.toFixed(precision);
}

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
