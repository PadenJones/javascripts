const obj = {
  numbers: [1, 2, 3, 4, 5],
  [Symbol.asyncIterator]() {
    let numberIndex = 0;

    return {
      next: async () => {
        if (numberIndex !== this.numbers.length) {
          const value = await new Promise(resolve =>
            setTimeout(
              () => resolve(this.numbers[numberIndex++]),
              100
            )
          );
          return {value, done: false};
        }

        return {done: true};
      }
    }
  }
};

const obj2 = {
  numbers: [1, 2, 3, 4, 5],
  async * [Symbol.asyncIterator]() {
    for (const number of this.numbers) {
      const value = await new Promise(resolve =>
        setTimeout(() => resolve(number), 100)
      );

      yield value;
    }
  }
};

const asyncFunc = async () => {
  for await (let value of obj) {
    console.log('async.obj.value: ', value);
  }

  for await (let value of obj2) {
    console.log('async.obj2.value: ', value);
  }
};

asyncFunc().then(() => console.log('finished async.obj'));

console.log('eof');
