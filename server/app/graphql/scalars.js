import { GraphQLScalarType } from "graphql";

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

export const dateType = new GraphQLScalarType(dateDefinition);
