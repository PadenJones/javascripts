const obj = {
  numbers: [1, 2, 3, 4, 5],
  letters: ['a', 'b', 'c'],

  [Symbol.iterator]() {
    let numberIndex = 0;
    let letterIndex = 0;

    return {
      next: () => {
        if (numberIndex !== this.numbers.length) {
          return { value: this.numbers[numberIndex++], done: false }
        }

        if (letterIndex !== this.letters.length) {
          return { value: this.letters[letterIndex++], done: false }
        }

        return { value: undefined, done: true }
      }
    }
  }
};

const obj2 = {
  numbers: [1, 2, 3, 4, 5],
  letters: ['a', 'b', 'c'],
  *[Symbol.iterator] () {
    for (const number of this.numbers) {
      yield number;
    }

    for (const letter of this.letters) {
      yield letter;
    }
  }
};

for (const val of obj) {
  console.log('obj.value: ', val);
}

for (const val of obj2) {
  console.log('obj2.value: ', val);
}

const it = obj2[Symbol.iterator]();
for (let { value, done } = it.next(); !done; { value, done } = it.next()) {
  console.log('manual.value: ', value);
}