# Open CO2

> Open Data Database and API for CO₂ Equivalent Values

[Project reference on Aramis DB](https://www.aramis-a.admin.ch/Texte/?ProjectID=49723)

---

## Description

**Open CO2** project enables companies to estimate their CO2 footprint through an open DB and API which can be used with their accounting tool.

---

## First-time setup

Clone this repository:
`git clone git@github.com:MediaComem/open-co2.git`

Move to server

`cd open-co2/server`

And install dependencies:

`npm ci`

## Run the server

Development mode (live reload enabled):  
`npm run dev`

Production mode:  
`npm start`

## Configuration

Copy the `.env.example` file as `.env` in the root of the server directory.

The following environment variables can be used to customize the server:

- `COMPOSE_PROJECT_NAME` Name of the docker-compose stack (Useful for Docker desktop, Portainer, etc.)
- `PORT` Server port (Default value to `4000`)
- `ENDPOINT` GraphQL endpoint (Default to `/graphql`)

See `server/src/config/default.js` for default values.

---

## Documentation & References

- [Apollo documentation](https://www.apollographql.com/docs/)
  - [Schema](https://www.apollographql.com/docs/apollo-server/schema/schema)
  - [Resolver](https://www.apollographql.com/docs/apollo-server/data/resolvers)
  - [Mock](https://www.apollographql.com/docs/apollo-server/testing/mocking)
