// https://www.apollographql.com/docs/apollo-server/testing/mocking

import { faker } from "@faker-js/faker";

export const mocks = {
  ID: () => faker.datatype.uuid(),
  Int: () => faker.datatype.number({ min: 1, max: 100 }),
  Boolean: () => faker.datatype.boolean(),
  Language: () => ({
    name: () => faker.random.alphaNumeric(3),
  }),
  Author: () => ({
    firstName: () => faker.name.firstName(),
    lastName: () => faker.name.lastName(),
  }),
};
