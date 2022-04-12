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
  console.log(array);
  console.log(average.toFixed(precision));
  return average.toFixed(precision);
}
