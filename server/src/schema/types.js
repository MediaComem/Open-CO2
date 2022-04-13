import { gql } from "apollo-server-express";

export const typeDefs = gql`
  """
  Open CO2 API queries
  """
  type Query {
    "Get a list of all CO2 values equivalents"
    co2Values: [CO2Value]
    "Get a list of all CO2 value's categories"
    categories: [Category]
    "Get a list of all unit types"
    units: [Unit]
    "Get an CO2 value based on its ID"
    co2ValueById(id: ID!): CO2Value
    "Get a category based on its ID"
    categoryById(id: ID!): Category
    """
    Get a category based on its name
    Use a hierarchical path with '/' to separate categories (e.g. energy/electricity/grid) to point a specific category
    """
    categoryByName(name: String!): Category
  }

  """
  Define a CO2 value
  An CO2 value gives an equivalence estimation of the carbon footprint for a given appliance
  """
  type CO2Value {
    "CO2 value UUID"
    id: ID!
    "CO2 value unit"
    unit: Unit
    "CO2 value"
    value: Float
    "CO2 value description"
    description: String
    "Is this CO2 value an average or not?"
    isAverage: Boolean
    "CO2 value source"
    source: String
    "CO2 value reference date of the source"
    dateOfReference: Date
  }

  """
  Define a Category
  A category is a group of CO2 values equivalents with a common thematic
  """
  type Category {
    "Category UUID"
    id: ID!
    "Category name"
    name: String!
    "Category description"
    description: String
    "Category subcategories"
    categories: [Category]!
    "Category CO2 values"
    co2values: [CO2Value]!
  }

  """
  Define a unit
  """
  type Unit {
    "Unit name"
    name: UnitEnum!
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
  }
`;
