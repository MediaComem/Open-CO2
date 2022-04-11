// https://www.apollographql.com/docs/apollo-server/data/resolvers

import { GraphQLScalarType } from "graphql";
// Mock data
import { equivalents } from "../data/equivalents.js";
import { categories } from "../data/categories.js";
import { subdomains } from "../data/subdomains.js";
import { domains } from "../data/domains.js";

// Custom GraphQL scalars
// InternalID scalar
// TODO:
const internalIdDefinition = {
  name: "InternalID",
  decription: "A valid internal ID with XX.YYY format",
  serialize: (value) => value,
  parseValue: (value) => value,
  parseLiteral: (ast) => ast.value,
};

const internalIdType = new GraphQLScalarType(internalIdDefinition);

// Date scalar
const dateDefinition = {
  name: "Date",
  decription: "A valid date following ISO 8601 syntax with YYYY-MM-DD format",
  serialize(value) {
    console.log("serialize");
    console.log(value);
    return new Date(value).toISOString();
    // .toLocaleDateString();
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
    equivalents: () => equivalents,
    categories: () => categories,
    subdomains: () => subdomains,
    domains: () => domains,
    equivalentById(parent, args, context, info) {
      return equivalents.find(
        (equivalent) => equivalent.id === Number(args.id)
      );
    },
    categoryById(parent, args, context, info) {
      return categories.find((category) => category.id === Number(args.id));
    },
    subdomainById(parent, args, context, info) {
      return subdomains.find((subdomain) => subdomain.id === Number(args.id));
    },
    domainById(parent, args, context, info) {
      return domains.find((domain) => domain.id === Number(args.id));
    },
  },
  Category: {
    equivalents: (parent) => {
      return findObjectsFromIds(parent.equivalents, equivalents);
    },
  },
  Subdomain: {
    categories: (parent) => {
      return findObjectsFromIds(parent.categories, categories);
    },
  },
  Domain: {
    subdomains: (parent) => {
      return findObjectsFromIds(parent.subdomains, subdomains);
    },
  },
  InternalID: internalIdType,
  Date: dateType,
};

function findObjectByKey(array, key, val) {
  return array.find((obj) => obj[key] == val);
}

function findObjectsFromIds(arrayOfIds, arrayOfObjects) {
  let objects = [];
  arrayOfIds.forEach((id) => {
    let object = findObjectByKey(arrayOfObjects, "id", id);
    objects.push(object);
  });
  return objects;
}
