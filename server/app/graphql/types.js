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
    "A CO2eq gives an equivalence estimation value of the carbon footprint in kg CO2Eq for a given unit"
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
    KG_CO2_PER_UNIT
    KG_CO2_PER_KWH
    KG_CO2_PER_TKM
    KG_CO2_PER_KG
    KG_CO2_PER_H
    KG_CO2_PER_PKM
    KG_CO2_PER_PERSON_NIGHT
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
  A source structure for a CO2eq
  """
  type Calculation {
    "mean (μ) – Average value from the children"
    mean: Float
    "count (n) – Children amount / Sample size"
    count: Float
    "min – The smallest children value"
    min: Float
    "max – The largest children value"
    max: Float
    "standardDeviation (σ) – Population standard deviation (SD)"
    standardDeviation: Float
  }

  """
  A CO2eq gives an equivalence value of the carbon footprint for a given appliance
  """
  type Co2eq {
    "Co2eq value"
    value: Float
    "unit"
    unit: String
    """
    Is this CO2eq value approximated or not?
    When a category have subcategories, Open CO2 automatically calculate a mean CO2eq value based on its children value.
    In this case, the CO2eq value of the parent is flagged as "approximated".
    """
    approximated: Boolean
    "Co2eq details"
    details: String
    "Co2eq data source"
    source: Source
    """
    Co2eq calculation details
    - mean (μ) – Average value from the children
    - count (n) – Children amount / Sample size
    - min – The smallest children value
    - max – The largest children value
    – standardDeviation (σ) – Population standard deviation (SD)
    """
    calculationDetails: Calculation
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
