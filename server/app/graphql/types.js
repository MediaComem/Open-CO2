import { gql } from "apollo-server-express";

export const typeDefs = gql`
  """
  Open CO2 API queries
  """
  type Query {
    "Get Open CO2 infos"
    getApiInfos: Info
    "Get a list of all unit types"
    getAllUnits: [Unit]
    # "Get a list of all CO2 values equivalents"
    # getAllCo2eqs: [Co2eq]
    "Get a list of all CO2 value's categories"
    getAllCategories: [Category]
    # "Get an CO2 value based on its ID"
    # getCo2eqByName(name: String!): Co2eq
    "Get a category based on its name"
    getCategoryByName(name: String!): Category
    # """
    # Get a category based on its name
    # Use a hierarchical path with '/' to separate categories (e.g. energy/electricity/grid) to point a specific category
    # """
    # categoryByName(name: String!): Category
  }

  """
  Define a Category
  A category is a group of CO2 values equivalents with a common thematic
  """
  type Category {
    "Category UUID"
    id: ID!
    "CO2 value UUID"
    categoryId: Int!
    "Category title"
    title: String!
    "Category name (normalized from title)"
    name: String!
    "Category path"
    path: String!
    "Category path"
    fullPath: String!
    "Category description"
    details: String
    "Category subcategories"
    categories: [Category]!
    childrens: [String]
    childrenIds: [Int]
    # "Category CO2 values"
    # co2eqs: [Co2eq]!
    co2eqs: [Co2eq]!
  }

  """
  Define a unit
  """
  type Unit {
    "Unit name"
    type: UnitEnum
    "Unit description"
    description: String
  }

  """
  Define a date following ISO 8601 syntax with YYYY-MM-DD format
  """
  scalar Date

  """
  Define a list of units used by equivalent value
  """
  enum UnitEnum {
    KWH
    TKM
    H
    PKM
    G_CO2_KWH
  }

  type Info {
    name: String
    version: String
    description: String
    homepage: String
    units: Int
    categories: Int
  }

  type Source {
    title: String
    url: String
    year: Int
  }

  type Co2eq {
    value: Float!
    unit: String!
    approximated: Boolean!
    details: String
    source: Source
  }
`;
