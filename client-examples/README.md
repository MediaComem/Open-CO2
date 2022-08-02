# Examples to consume API

When deploying the stack using docker-compose, a "GraphQL Playground" service is accessible by default [on port 4200](http://localhost:4200/), which allows you to consult the documented GraphQL API schema and perform queries.

Try this query to access all categories and related CO2eq:

```graphql
{
  categories {
    name
    co2eq {
      value
      unit
    }
  }
}
```

## Client example implementation

- [x] Python

## API development tool

- [x] Postman
- [x] Hoppscotch
- [x] Apollo Studio
