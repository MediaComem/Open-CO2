import { UserInputError } from "apollo-server-express";
import { dateType } from "./scalars.js";
import {
  findObjectsFromIds,
  formatString,
  isArrayEmpty,
  getAverageFromArray,
} from "../helpers/utils.js";
// Mock data
import { co2values } from "../data/co2values.js";
import { units } from "../data/units.js";
import { domains } from "../data/domains.js";
import { subdomains } from "../data/subdomains.js";
import { categories } from "../data/categories.js";
import {
  energyRenewability,
  energySource,
  transportMode,
} from "../data/groups.js";

let mergedCategories = [].concat(
  domains,
  subdomains,
  categories,
  energyRenewability,
  energySource,
  transportMode
);

// Resolvers
export const resolvers = {
  Query: {
    co2Values: () => co2values,
    categories: () => mergedCategories,
    units: () => units,
    co2ValueById(parent, args) {
      return equivalents.find(
        (equivalent) => equivalent.id === Number(args.id)
      );
    },
    categoryById(parent, args) {
      return mergedCategories.find(
        (category) => category.id === Number(args.id)
      );
    },
    categoryByName(parent, args) {
      // Path to category
      if (args.name.includes("/")) {
        // TODO: Review after implementation V0 via mock data
        const path = args.name.split("/");

        return mergedCategories.find(
          // Only check latest path item
          (category) =>
            formatString(category.name) === formatString(path[path.length - 1])
        );
      } else {
        // Direct name of category
        const filteredCategories = mergedCategories.find(
          (category) => formatString(category.name) === formatString(args.name)
        );

        if (filteredCategories === undefined) {
          throw new UserInputError(`No category with name '${args.name}'`);
        }

        return filteredCategories;
      }
    },
  },
  Category: {
    name: (parent) => {
      if (parent.name) return formatString(parent.name);
    },
    categories: (parent) => {
      if (parent.categories === undefined) {
        return [];
      }
      if (parent.categories && parent.categories.length > 0)
        return findObjectsFromIds(parent.categories, mergedCategories);
      else return ["No subcategories"];
    },
    co2values: (parent) => {
      if (parent.co2values === undefined) {
        console.log(`Calculate average for ${parent.name} category`);
        let childrenCo2Values = getChildrenCo2Values(parent.categories);
        return getCalculatedCo2Value(childrenCo2Values, parent.name);
      }

      return findObjectsFromIds(parent.co2values, co2values);
    },
  },
  Date: dateType,
};

// Functions
function getCalculatedCo2Value(arrayOfCo2ValuesObjects, parentCategoryName) {
  let values = [];
  arrayOfCo2ValuesObjects.forEach((item) => {
    values.push(item.value);
  });
  values = values.flat();
  const average = getAverageFromArray(values);
  const co2Object = {
    id: 9999,
    unit: "KWH",
    value: average,
    isAverage: true,
    description: `Average CO2 equivalent for ${parentCategoryName} category`,
  };
  return new Array(co2Object);
}

function getChildrenCo2Values(categoryIds) {
  let childrenCategories = findObjectsFromIds(categoryIds, mergedCategories);

  let childrenCategoryIds = [];
  childrenCategories.forEach((item) => {
    childrenCategoryIds.push(item.categories);
  });
  childrenCategoryIds = childrenCategoryIds.flat();

  let depth = 0;

  while (!hasCo2Values(childrenCategories) && depth < 4) {
    depth++;
    childrenCategories = findObjectsFromIds(
      childrenCategoryIds,
      mergedCategories
    );
    if (hasCo2Values(childrenCategories)) break;
  }

  let co2ValuesIds = [];
  childrenCategories.forEach((item) => {
    co2ValuesIds.push(item.co2values);
  });
  co2ValuesIds = co2ValuesIds.flat();

  return findObjectsFromIds(co2ValuesIds, co2values);
}

function hasCo2Values(arrayOfReference) {
  for (let i = 0; i < arrayOfReference.length; i++) {
    const item = arrayOfReference[i];
    if (item.co2values && !isArrayEmpty(item.co2values)) return true;
  }

  return false;
}
