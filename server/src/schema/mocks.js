import { faker } from "@faker-js/faker";

export const mocks = {
  ID: () => faker.datatype.uuid(),
  Int: () => faker.datatype.number({ min: 1, max: 100 }),
  Boolean: () => faker.datatype.boolean(),
  CO2Value: () => ({
    source: () => faker.lorem.words(6),
    dateOfReference: () => faker.date.between("2022-04-01", "2022-04-30"),
  }),
  Category: () => ({
    description: () => faker.lorem.words(40),
  }),
};
