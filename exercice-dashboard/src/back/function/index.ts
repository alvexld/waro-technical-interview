import { Db } from "../db/types";

/**
 *  Get the recycled rate of a scenario.
 */
export const getScenarioRecycledRate = async (scenario: Db.Reference) => {
  // ... some costly code
  return Math.random() * 100; // Return a rate between 0 et 100
};

/**
 * Get the weight of a scenario.
 */
export const getScenarioWeight = async (scenario: Db.Reference) => {
  // ... some costly code
  return Math.random() * 10; // Return a weight between 0 et 10 kg
};
