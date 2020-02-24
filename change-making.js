

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

const coins = [3, 7];
const amount = 11;

console.log(minCoinCount({}, coins, amount));
