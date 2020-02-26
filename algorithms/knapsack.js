const {build2dArray} = require('./helpers.js');

/**
 0/1 Knapsack - not optimized
 */

function bottomUp(items, maxWeight) {
  const maxValues = build2dArray(items.length, maxWeight + 1, 0);

  for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
    for (let weight = 0; weight < maxWeight + 1; weight++) {
      const {weight: itemWeight, value: itemValue} = items[itemIndex];
      const prevRow = maxValues[itemIndex - 1] || [];

      const zero = prevRow[weight] || 0;

      const usingItem = itemWeight <= weight ? itemValue : 0;
      const prevValue = prevRow[weight - itemWeight] || 0;
      const one = usingItem + prevValue;

      maxValues[itemIndex][weight] = Math.max(zero, one);
    }
  }

  return maxValues;
}

function calcZero(maxValues, items, maxWeight) {
  const {weight: itemWeight, value: itemValue} = items.slice(-1).pop();
  const prevRow = maxValues[items.length - 2];

  if (prevRow === undefined) {
    return itemWeight <= maxWeight ? itemValue : 0;
  } else {
    return prevRow[maxWeight] || knapsackSubProblem(maxValues, items.slice(0, -1), maxWeight);
  }
}

function calcOne(maxValues, items, maxWeight) {
  const {weight: itemWeight, value: itemValue} = items.slice(-1).pop();
  const prevRow = maxValues[items.length - 2];
  const prevIndex = maxWeight - itemWeight;

  const value = itemWeight <= maxWeight ? itemValue : 0;

  if (prevRow === undefined || prevIndex < 0) {
    return value;
  } else {
    const prevValue = prevRow[prevIndex] || knapsackSubProblem(maxValues, items.slice(0, -1), prevIndex);
    return value + prevValue;
  }
}

function knapsackSubProblem(maxValues, items, maxWeight) {
  const zero = calcZero(maxValues, items, maxWeight);
  const one = calcOne(maxValues, items, maxWeight);

  maxValues[items.length - 1][maxWeight] = Math.max(zero, one);

  return maxValues[items.length - 1][maxWeight];
}

function knapsack(items, maxWeight) {
  const maxValues = build2dArray(items.length, maxWeight + 1, undefined);
  return knapsackSubProblem(maxValues, items, maxWeight);
}

const MAX_WEIGHT = 5;

const ITEMS = [
  {
    weight: 5,
    value: 60,
  },
  {
    weight: 3,
    value: 50,
  },
  {
    weight: 4,
    value: 70,
  },
  {
    weight: 2,
    value: 30,
  },
];

function time() {
  console.time('knapsack');
  for (let i = 0; i < 10000; i++) {
    knapsack(ITEMS, MAX_WEIGHT);
  }
  console.timeEnd('knapsack');

  console.time('bottomUp');
  for (let i = 0; i < 10000; i++) {
    bottomUp(ITEMS, MAX_WEIGHT);
  }
  console.timeEnd('bottomUp');
}

module.exports = {bottomUp, knapsack};
