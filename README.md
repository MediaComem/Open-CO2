![](./cover.png)

> An open Data Database and API for CO₂ Equivalent Values

[Project reference on Aramis DB](https://www.aramis-a.admin.ch/Texte/?ProjectID=49723)

---

## Description

**Open CO2** project enables companies to estimate their CO2 footprint through an open DB and API which can be used with their accounting tool.

---

## First-time setup

Clone this repository:  
`git clone git@github.com:MediaComem/open-co2.git`

Move to server directory:  
`cd open-co2/server`

Run stack using docker-compose:  
`docker-compose up -d`

<!-- ## Run the server

Development mode (live reload enabled):
`npm run dev`

Production mode:
`npm start` -->

## Configuration

Copy the `.env.example` file as `.env` in the root of the server directory.

The following environment variables can be used to customize the server:

- `COMPOSE_PROJECT_NAME` Name of the docker-compose stack (Useful for Docker desktop, Portainer, etc.)
- `PORT` Server port (Default value to `4000`)
- `ENDPOINT` GraphQL endpoint (Default to `/graphql`)

See `server/src/config/default.js` for default values.

---

## Stack

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
