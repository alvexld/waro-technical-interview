import { generator } from "./faker";

/**
 * This class is a fake database ORM that stores data in memory.
 */
class Database {
  async getReference(id: string) {
    return this.references.find((reference) => reference.id === id);
  }

  async getReferences() {
    return this.references;
  }

  async getCategories() {
    return generator.categories;
  }

  async getTags() {
    return generator.tags;
  }

  private references = generator.references(100);
}

const database = new Database();

export default database;
