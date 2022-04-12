import { dateType } from "./scalars.js";
import { findObjectsFromIds, formatString } from "../helpers/utils.js";
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
      console.log(parent, args);

      // Path to category
      if (args.name.includes("/")) {
        // TODO: Review after implementation V0 via mock data
        const path = args.name.split("/");

        return mergedCategories.find(
          // Only check latest path item
          (category) =>
            formatString(category.name) === formatString(path[path.length - 1])
        );
      }

      // Direct name of category
      return mergedCategories.find(
        (category) => formatString(category.name) === formatString(args.name)
      );
    },
  },
  Category: {
    name: (parent) => {
      if (parent.name) return formatString(parent.name);
    },
    categories: (parent) => {
      if (parent.categories && parent.categories.length > 0)
        return findObjectsFromIds(parent.categories, mergedCategories);
      else return ["No subcategories"];
    },
    co2values: (parent) => {
      return findObjectsFromIds(parent.co2values, co2values);
    },
  },
  Date: dateType,
};
