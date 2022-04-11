//https://www.apollographql.com/docs/apollo-server/schema/schema

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  """
  Queries
  """
  type Query {
    "Get a list of all equivalents"
    equivalents: [Equivalent]
    "Get a list of all equivalent's categories"
    categories: [Category]
    "Get a list of all equivalent's subdomains"
    subdomains: [Subdomain]
    "Get a list of all equivalent's domains"
    domains: [Domain]
    "Get an equivalent based on ID"
    equivalentById(id: ID!): Equivalent
    "Get a category based on ID"
    categoryById(id: ID!): Category
    "Get an subdomain based on ID"
    subdomainById(id: ID!): Subdomain
    "Get a domain based on ID"
    domainById(id: ID!): Domain
  }

  """
  Define a CO2 equivalent value
  An equivalent gives an estimation of the carbon footprint for a given appliance
  """
  type Equivalent {
    "Equivalent UUID"
    id: ID!
    "Equivalent internal ID (XX.YYY format where XX refers to category ID)"
    internalId: InternalID!
    "Equivalent unit"
    unit: Unit
    "Equivalent value"
    value: Float
    "Equivalent description"
    description: String
    "Is this equivalent equivalent value an average or not?"
    isAverage: Boolean
    "Equivalent date of establishment"
    dateOfEstablishment: Date
    "Equivalent date of latest update"
    dateOfLatestUpdate: Date
  }

  """
  Define a Category
  A category is a group of equivalents with a common thematic
  """
  type Category {
    "Category UUID"
    id: ID!
    "Category internal ID (XX format)"
    internalId: Int!
    "Category description"
    description: String
    "Category equivalents"
    equivalents: [Equivalent]
  }

  """
  Define a model from which (sub)domains herits
  """
  interface Scope {
    "Scope UUID"
    id: ID!
    "Scope name"
    name: String!
  }

  """
  Define a domain
  A domain is group of subdomains with a common thematic
  """
  type Domain implements Scope {
    "Domain UUID"
    id: ID!
    "Domain name"
    name: String!
    "Domain description"
    description: String
    "Domain subdomains list"
    subdomains: [Subdomain]
  }

  """
  Define a subdomain
  A subdomain is group of categories with a common thematic
  """
  type Subdomain implements Scope {
    "Subdomain UUID"
    id: ID!
    "Subdomain name"
    name: String!
    "Subdomain description"
    description: String
    "Domain categories list"
    categories: [Category]
  }

  """
  Define a custom ID format used as internal reference
  """
  scalar InternalID

  """
  Define a date following ISO 8601 syntax with YYYY-MM-DD format
  """
  scalar Date

  """
  Define a list of units used by equivalent value
  """
  enum Unit {
    KWH
    TKM
    H
    PKM
  }
`;
