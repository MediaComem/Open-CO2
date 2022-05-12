import { gql } from "apollo-server-express";

export const typeDefs = gql`
  """
  Open CO2 API queries
  """
  type Query {
    "Get Open CO2 infos"
    infos: Info
    "Get a list of all unit types"
    units: [Unit]
    "Get a unit based on its type"
    unit(type: String!): Unit
    "Get a list of all CO2 value's categories"
    categories: [Category]
    "Get a category based on its name"
    category(name: String!): Category
    # """
    # Get a category based on its name
    # Use a hierarchical path with '/' to separate categories (e.g. energy/electricity/grid) to point a specific category
    # """
    # categoryByName(name: String!): Category
  }

  """
  A category is a group of CO2 values equivalents with a common thematic
  """
  type Category {
    "Category UUID"
    id: ID!
    # "CO2 value UUID"
    # categoryId: Int!
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
    categories: [Category]
    "List of subcategories by name"
    children: [String]
    # childrenIds: [Int]
    # "Category CO2 values"
    # co2eqs: [Co2eq]!
    "A CO2eq gives an equivalence estimation value of the carbon footprint for a given appliance"
    co2eq: Co2eq!
  }

  """
  An unit is attached to a CO2eq to mesure its value
  """
  type Unit {
    "Unit type defined by a strict list of units"
    type: UnitEnum
    "Unit description"
    description: String
  }

  """
  UnitEnum defines a static list of units used by Co2eq
  """
  enum UnitEnum {
    KWH
    TKM
    H
    PKM
    G_CO2_KWH
  }

  """
  A source structure for a CO2eq
  """
  type Source {
    "Source title (e.g. Name of the entity or company who produced the data)"
    title: String
    "Source URL pointing a link to the data source"
    url: String
    "Source year (YYYY format)"
    year: Int
  }

  """
  A CO2eq gives an equivalence value of the carbon footprint for a given appliance
  """
  type Co2eq {
    "Co2eq value"
    value: Float
    "Co2eq unit"
    unit: String
    """
    Is this CO2eq value approximated or not?
    When a category have subcategories, Open CO2 automatically calculate a mean CO2eq value based on its children value.
    In this case, the CO2eq value of the parent is flagged as "approximated".
    """
    approximated: Boolean
    "Co2eq details"
    details: String
    "Co2eq min"
    min: Float
    "Co2eq max"
    max: Float
    "Co2eq standard deviation"
    standardDeviation: Float
    "Co2eq data source"
    source: Source
  }

  """
  An info describes information about the Open CO2 API
  """
  type Info {
    "Name of the API"
    name: String
    "Version of the API"
    version: String
    "Description of the API"
    description: String
    "Homepage URL of the API"
    homepage: String
    "Current number of categories in the collection"
    categories: Int
    "Current number of units  in the collection"
    units: Int
  }

  """
  Define a date following ISO 8601 syntax with YYYY-MM-DD format
  """
  scalar Date
`;
