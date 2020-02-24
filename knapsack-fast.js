const {build2dArray} = require('./helpers');
const {bottomUp} = require('./knapsack');

const debugHistory = history => console.log(history.map(row => row.map(ele => ele !== undefined ? ele : ' ')));

function max(history, costs, values, indexBudget, indexCost) {
  if (indexBudget < 0 || indexCost < 0) {
    return 0;
  }

  const cost = costs[indexCost];
  const budget = indexBudget + 1;
  const value = cost <= budget ? values[indexCost] : 0;

  const prevRowIndex = indexCost - 1;
  const prevRowValIndex = indexBudget - cost;
  const prevRow = history[prevRowIndex];

  if (!prevRow) {
    history[indexCost][indexBudget] = cost <= budget ? value : 0;
  } else {
    const top = prevRow[indexBudget] || max(history, costs, values, indexBudget, prevRowIndex);
    const prevValue = prevRow[prevRowValIndex] || max(history, costs, values, prevRowValIndex, prevRowIndex);
    const using = value + prevValue;
    history[indexCost][indexBudget] = Math.max(top, using);
  }

  return history[indexCost][indexBudget];
}

const budget = 5;
const values = [60, 50, 70, 30];
const costs = [5, 3, 4, 2];
const combo = values.map((value, index) => ({ value, weight: costs[index] }));
function driver() {
  const history = build2dArray(costs.length, budget);
  return max(history, costs, values, budget - 1, costs.length - 1);
}

console.time('driver');
for (let i = 0; i < 10000; i++) {
  driver();
}
console.timeEnd('driver');

console.time('bottomUp');
for (let i = 0; i < 10000; i++) {
  bottomUp(combo, budget);
}
console.timeEnd('bottomUp');

driver();
