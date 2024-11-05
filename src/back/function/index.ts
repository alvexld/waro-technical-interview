import { Db } from "../db/types";

const formattingImpacts = [
  {
    type: "KNITTED",
    impact: 1.5,
  },
  {
    type: "WOVEN",
    impact: 1.2,
  },
];

export const getFormattingImpact = async (scenario: Db.Reference) => {
  const inp = await getScenarioWeight(scenario);

  let impact = 0;

  scenario.modelisation.formatting.forEach((formatting) => {
    const formattingImpact = formattingImpacts.find(
      (fi) => fi.type === formatting.type
    );

    if (formattingImpact) {
      impact += formattingImpact.impact * inp;
    }
  });

  return impact;
};

/**
 *  Get the recycled rate of a scenario.
 */
export const getScenarioRecycledRate = async (scenario: Db.Reference) => {
  const materials = scenario.modelisation.material.filter(
    (material) => material.recycled > 0
  );

  const total = scenario.modelisation.material.reduce(
    (acc, cur) => acc + cur.weight,
    0
  );

  const recycled = materials.reduce((acc, cur) => acc + cur.recycled, 0);

  return recycled / total;
};

/**
 * Get the weight of a scenario.
 */
export const getScenarioWeight = async (scenario: Db.Reference) => {
  return scenario.modelisation.material.reduce(
    (acc, cur) => acc + cur.weight,
    0
  );
};
