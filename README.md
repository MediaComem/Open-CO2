# Open CO2

> Open Data Database and API for CO₂ Equivalent Values

[Project reference on Aramis DB](https://www.aramis-a.admin.ch/Texte/?ProjectID=49723)

---

## Description

**Open CO2** project enables companies to estimate their CO2 footprint through an open DB and API which can be used with their accounting tool.

## First-time setup

Clone this repository:
`git clone git@github.com:MediaComem/open-co2.git`

Install dependencies:

```
cd server
npm ci
```

## Configuration

Copy the `.env.example` file as `.env` in the root of the server.

The following environment variables can be used to customize the server:

- `PORT` Server port (Default value to `4000`)
- `ENDPOINT` GraphQL endpoint (Defautl to `/graphql`)

## Run the server

Development mode (live reload enabled):  
`npm run dev`

Production mode:  
`npm start`
