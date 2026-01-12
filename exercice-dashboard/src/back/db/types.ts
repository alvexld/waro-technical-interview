/**
 * This simulates de database schema
 */
export namespace Db {
  /**
   * Product reference, like a T-shirt, a jean, etc. sold by a brand.
   */
  export type Reference = {
    id: string;
    name: string;
    /**
     * Foreign key to Category
     */
    categoryId: Category;

    /**
     * Foreign keys to Tag
     */
    tagIds: Tag[]; // Foreign keys to Tag

    /**
     * in kgCO2eq
     */
    co2Impact: number;

    /**
     * Composition of the reference. What is inside is not very important
     */
    modelisation: Modelisation;
  };

  /**
   * Category of a reference, like "T-shirt", "Jean", etc.
   */
  export type Category = "T-shirt" | "Couch";

  /**
   * Tag of a reference, like "organic", "recycled", etc.
   */
  export type Tag = "Usine A" | "Usine B" | "Fournisseur A" | "Fournisseur B";

  export type Modelisation = {
    id: string;
    // ... many other fields
  };
}
