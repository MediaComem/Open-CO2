import { GraphQLScalarType } from "graphql";
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

// Custom GraphQL scalars

// Date scalar
const dateDefinition = {
  name: "Date",
  decription: "A valid date following ISO 8601 syntax with YYYY-MM-DD format",
  serialize(value) {
    console.log("serialize");
    console.log(value);
    return new Date(value).toISOString();
  },
  parseValue(value) {
    console.log("parseValue");
    console.log(value);
    return new Date(value);
  },
  parseLiteral(ast) {
    console.log("parseLiteral");
    console.log(value);
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
};

const dateType = new GraphQLScalarType(dateDefinition);

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

function findObjectByKey(array, key, val) {
  return array.find((obj) => obj[key] == val);
}

function findObjectsFromIds(arrayOfIds, arrayToFilter) {
  let objects = [];
  if (arrayOfIds) {
    arrayOfIds.forEach((id) => {
      let matchingObject = findObjectByKey(arrayToFilter, "id", id);
      objects.push(matchingObject);
    });
  }
  return objects;
}

function formatString(string) {
  return string
    .normalize("NFD") // Normalization form canonical decomposition
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/ /g, "_") // Replace spaces with underscore
    .toLowerCase(); // Convert to lowercase
}
