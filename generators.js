function* generator(max) {
  for (let i = 0; i < max; i++) {
    yield i;
  }
}

const gen = generator(10);

console.log(gen.next()); // should print: `{ value: 0, done: false }`
console.log(gen.next());
console.log(gen.next());

for (const value of gen) {
  console.log('value: ', value);
}

console.log('eof');
