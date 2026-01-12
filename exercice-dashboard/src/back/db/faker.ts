import { faker } from "@faker-js/faker";
import { Db } from "./types";

const categories: Db.Category[] = ["T-shirt", "Couch"];

export const tags: Db.Tag[] = [
  "Usine A",
  "Usine B",
  "Fournisseur A",
  "Fournisseur B",
];

const reference = (): Db.Reference => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  categoryId: faker.helpers.arrayElement(categories),
  tagIds: faker.helpers.arrayElements(tags),
  co2Impact: faker.number.float({ min: 0 }),
  modelisation: {
    id: faker.string.uuid(),
  },
});

export const generator = {
  references: (count: number) =>
    faker.helpers.multiple(() => reference(), { count }),
  tags,
  categories,
};
