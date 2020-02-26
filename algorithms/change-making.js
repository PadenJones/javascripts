function minCoinCount(history, coins, amount) {
  const numbers = [];

  for (let coin of coins) {
    const difference = amount - coin;

    if (difference > 0) {
      numbers.push(1 + (history[difference] || minCoinCount(history, coins, difference)));
    } else if (difference === 0) {
      numbers.push(1);
    }
  }

  history[amount] = Math.min(...numbers);

  return history[amount];
}

function maxCombinationCount(history, coins, amount) {
  let combs = 0;

  for (let coin of coins) {
    const difference = amount - coin;

    if (difference > 0) {
      const past = history[difference] || maxCombinationCount(history, coins, difference);

      if (past === 0) {
        return 0;
      }

      combs++;
    } else if (difference === 0) {
      combs++;
    }
  }

  history[amount] = combs;

  return history[amount];
}

const coins = [1, 2, 5];
const amount = 5;

// console.log(minCoinCount({}, coins, amount));
// console.log(maxCombinationCount({}, coins, amount));
