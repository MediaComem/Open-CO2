// https://www.apollographql.com/docs/apollo-server/data/resolvers

import { GraphQLScalarType } from "graphql";
// Mock data
import { equivalents } from "../data/equivalents.js";
import { categories } from "../data/categories.js";
import { subdomains } from "../data/subdomains.js";
import { domains } from "../data/domains.js";
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
  Date: dateType,
};
