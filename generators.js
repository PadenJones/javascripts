function* generator(max) {
  for (let i = 0; i < max; i++) {
    yield i;
  }
}

for (const value of generator(10)) {
  console.log('value: ', value);
}

console.log('eof');
