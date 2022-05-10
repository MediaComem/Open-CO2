function findObjectByKey(array, key, val) {
  return array.find((obj) => obj[key] === val);
}

export function findObjectsFromIds(arrayOfIds, arrayToFilter) {
  const objects = [];
  if (arrayOfIds) {
    arrayOfIds.forEach((id) => {
      const matchingObject = findObjectByKey(arrayToFilter, "id", id);
      objects.push(matchingObject);
    });
  }
  return objects;
}

export function formatString(string) {
  if (string && (typeof string === "string" || string instanceof String)) {
    return string
      .normalize("NFD") // Normalization form canonical decomposition
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/,/g, "") // Remove comma
      .replace(/ /g, "_") // Replace spaces with underscore
      .toLowerCase(); // Convert to lowercase
  } else return "";
}

export function isArrayEmpty(array) {
  // Not an array
  if (!Array.isArray(array)) {
    return false;
  }
  // Empty array
  if (array.length === 0) {
    return true;
  }
  // Not an empty array
  return false;
}
