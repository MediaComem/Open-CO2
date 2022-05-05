import {
  formatString,
  hashString,
  getMeanFromArray,
  getDeviationFromArray
} from "../../helpers/utils.js";
// import util from "util";

/**
 * Class to process XLS sheets and turn it to JS objets
 */
export default class FileComposer {
  /**
   * FileComposer constructor
   * @param {Sheet content from fileReader} sheet
   */
  constructor(sheet) {
    this.sheet = sheet;
    this.maxDepth = 10;
    this.floatPrecision = 3;
  }

  /**
   * Group internal methods to process units sheet
   */
  processUnits() {
    for (let i = 0, l = this.sheet.length; i < l; i++) {
      const row = this.sheet[i];
      row.type = row.Type;
      row.description = row.Description;
      delete row[`Type`];
      delete row[`Description`];
    }
  }

  /**
   * Group internal methods and execute in order to process categories sheet
   */
  processCategories() {
    // 1 – Update object keys from sheet headers
    this.#updateKeys();
    // 2 – Construct path (based on unique name)
    this.#addPath();
    // 3 – Add category ID (hash from fullpath)
    this.#addCategoryId();
    // 4 – Add reference to children categories
    this.#addChildrens();
    // 5 – Calculate average for parent categories
    this.#addAverage();
    // 6 – Clean unused keys and order its
    this.#orderObject();
  }

  /**
   * Construct and return a deep tree with children categories
   */
  #getDeepTree() {
    const deepTree = [],
      levels = [deepTree];

    this.sheet.forEach((row) => {
      levels[row.depth - 1].push({
        ...row,
        children: (levels[row.depth] = [])
      });
    });
    return deepTree[0];
  }

  /**
   * Find a node in tree by passing its uniqueName
   * Return the node object (result) and its path (path)
   */
  #findInTree(name, tree) {
    if (tree.uniqueName === name) {
      const path = [tree.name];
      return { result: tree, path };
    } else if (tree.children) {
      for (const child of tree.children) {
        const tmp = this.#findInTree(name, child);
        if (!(Object.keys(tmp).length === 0 && tmp.constructor === Object)) {
          tmp.path.unshift(tree.name);
          return tmp;
        }
      }
      return {};
    }
  }

  #updateKeys() {
    // Loop over rows
    for (let i = 0, l = this.sheet.length; i < l; i++) {
      const row = this.sheet[i];
      // Loop over level's names
      for (let n = 0; n < this.maxDepth; n++) {
        if (row[`Level ${n + 1}`] !== undefined) {
          // Add title key with value from level
          row.title = row[`Level ${n + 1}`];
          // Add depth key from level number
          const currentLevel = Object.keys(row)[0].replace("Level ", "");
          row.depth = parseInt(currentLevel);
          // Delete unused level key
          delete row[`Level ${n + 1}`];
        }
      }
      // Add name key with value from formatted title
      row.name = formatString(row.title);
      row.uniqueName = formatString(row.title) + `_${i}`;

      // Add co2eq object
      if (row.CO2) {
        const source = {
          title: row.Source,
          url: row.URL,
          year: row.Year
        };
        row.co2eqs = [
          {
            value: row.CO2,
            unit: row.Unit,
            approximated: false,
            details: row.details,
            source
          }
        ];
        // Remove some keys
        delete row[`Details`];
        delete row[`Source`];
        delete row[`URL`];
        delete row[`Year`];
      } else {
        // Keys to lowercase
        row.details = row[`Details`];
        delete row[`Details`];
      }
      delete row[`CO2`];
      delete row[`Unit`];
    }
  }

  #addPath() {
    const deepTree = this.#getDeepTree();
    // Loop over rows
    for (let i = 0, l = this.sheet.length; i < l; i++) {
      const row = this.sheet[i];
      const path = this.#findInTree(row.uniqueName, deepTree).path;

      row.fullPath = "/" + path.join("/");
      path.pop();
      row.path = "/" + path.join("/");
    }
  }

  #addCategoryId() {
    // Loop over rows
    for (let i = 0, l = this.sheet.length; i < l; i++) {
      const row = this.sheet[i];
      // Generate hash from fullpath
      row.categoryId = hashString(row.fullPath);
    }
  }

  #addChildrens() {
    const deepTree = this.#getDeepTree();
    // Loop over rows
    for (let i = 0, l = this.sheet.length; i < l; i++) {
      const row = this.sheet[i];

      const object = this.#findInTree(row.uniqueName, deepTree).result;

      if (object.children && object.children.length > 0) {
        row.childrens = object.children.flatMap((child) => child.name);
        row.childrenUniqueNames = object.children.flatMap(
          (child) => child.uniqueName
        );
        row.childrenIds = object.children.flatMap((child) => child.categoryId);
      } else {
        row.childrens = null;
        row.childrenIds = null;
      }
    }
  }

  #addAverage() {
    const deepTree = this.#getDeepTree();

    // Anonymous function to check if all element are the same in given array
    const allEqual = (arr) => arr.every((v) => v === arr[0]);

    // Traverse tree from leaf to root
    for (let i = this.sheet.length - 1; i >= 0; i--) {
      const row = this.sheet[i];
      let object;

      if (row.name) object = this.#findInTree(row.uniqueName, deepTree).result;

      // Row that doesn't have CO2eq
      if (object.co2eqs === null || !object.co2eqs) {
        let childArray;

        if (object.children.length === 1) {
          // console.log("SINGLE CO2 CHILD");
          childArray = object.children.flatMap((child) => child.co2eqs[0]);
        } else {
          // console.log("------------------------------------");
          // console.log("MULTIPLE CO2 CHILD");
          // console.log(object.name);
          // console.log("------------------------------------");

          const flatCo2eqs = [];
          object.children.forEach((element) => {
            flatCo2eqs.push(...element.co2eqs);
          });

          childArray = flatCo2eqs;
        }

        // Flatten direct child values
        const childValues = childArray.flatMap((child) => child.value);

        // Flatten direct child units
        const childUnits = childArray.flatMap((child) => child.unit);

        let co2eq;

        // console.log();
        if (allEqual(childUnits)) {
          // ----------------------------------------------------------------
          // Single unit - Childrens have the same unit
          // ----------------------------------------------------------------

          // Calculate mean from child values
          const mean = getMeanFromArray(childValues, this.floatPrecision);

          const deviation = getDeviationFromArray(
            childValues,
            this.floatPrecision
          );

          const source = {
            title: "Open CO2 automatic calculation",
            url: "https://github.com/MediaComem/open-co2",
            year: new Date().getFullYear()
          };

          co2eq = {
            value: mean,
            unit: childUnits[0],
            approximated: true,
            details: `Approximated CO2e value for '${row.title}' category. Open CO2 API automatically calculate average from children's categories values.`,
            min: Math.min.apply(Math, childValues),
            max: Math.max.apply(Math, childValues),
            standardDeviation: deviation,
            source
          };

          object.co2eqs = [co2eq];
          row.co2eqs = [co2eq];

          // console.log("-----------------------------------------------------");
          // console.log(`Average for: ${row.name}`);
          // console.log("-----------------------------------------------------");
          // console.log(childArray);
          // console.log(childValues);
          // console.log(childUnits);
          // console.log("✅✅✅");
          // console.log("Children units are the same");
          // console.log("✅✅✅");
          // console.log(`Average: ${average}`);
          // console.log(object.co2eqs);
        } else {
          // ----------------------------------------------------------------
          // Multiples units - Childrens have different units
          // ----------------------------------------------------------------

          // Get list unique child units by remove duplicated ones
          const uniqueUnits = [...new Set(childUnits)];

          const co2eqs = [];

          // Loop over unique units
          for (let i2 = 0, l2 = uniqueUnits.length; i2 < l2; i2++) {
            // let valuesForUnit = [];
            const valuesForUnit = [];
            let co2eqObject;

            // Loop over childs units (and values)
            for (let i3 = 0, l3 = childUnits.length; i3 < l3; i3++) {
              if (uniqueUnits[i2] === childUnits[i3]) {
                // console.log(childValues[j]);

                valuesForUnit.push(childValues[i3]);

                const mean = getMeanFromArray(
                  valuesForUnit,
                  this.floatPrecision
                );

                const deviation = getDeviationFromArray(
                  valuesForUnit,
                  this.floatPrecision
                );

                co2eqObject = {
                  value: mean,
                  unit: uniqueUnits[i2],
                  approximated: true,
                  details: `Approximated CO2e value for '${row.title}' category. Open CO2 API automatically calculate average from children's categories values.`,
                  min: Math.min.apply(Math, childValues),
                  max: Math.max.apply(Math, childValues),
                  standardDeviation: deviation
                };
              }
            }

            co2eqs.push(co2eqObject);
          }

          object.co2eqs = co2eqs;
          row.co2eqs = co2eqs;

          // console.log("-----------------------------------------------------");
          // console.log(`Average for: ${row.name}`);
          // console.log("-----------------------------------------------------");
          // console.log(childArray);
          // console.log(childValues);
          // console.log("❌❌❌");
          // console.log("Children units are different");
          // console.log("❌❌❌");
          // console.log(childUnits);
          // console.log(`Average: ${average}`);
          // console.log(object.co2eqs);
          // console.log("Unique units:");
          // console.log(uniqueUnits);
        }
      }

      // if (object.name === "transports") {
      //   console.log("##############################################");
      //   console.log("##############################################");
      //   console.log("##############################################");
      //   console.log(
      //     util.inspect(object.co2eqs, {
      //       showHidden: false,
      //       depth: null,
      //       colors: true
      //     })
      //   );
      // }
    }
  }

  #orderObject() {
    // Loop over rows
    for (let i = 0, l = this.sheet.length; i < l; i++) {
      const object = this.sheet[i];
      // Remove some keys
      delete this.sheet[i].uniqueName;
      delete this.sheet[i].childrenUniqueNames;
      // Set object's keys in this order
      const objectOrder = {
        categoryId: null,
        title: null,
        name: null,
        path: null,
        fullPath: null,
        depth: null,
        details: null,
        co2eqs: null
      };
      // Reassign object to order its keys
      this.sheet[i] = Object.assign(objectOrder, object);
    }
  }
}
