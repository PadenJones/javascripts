async function* asyncGenerator(max, delay) {
  for (let i = 0; i < max; i++) {
    yield await new Promise(resolve => setTimeout(() => resolve(i), delay));
  }
}

const asyncFunc = async () => {
  for await (const value of asyncGenerator(10, 200)) {
    console.log('asyncFunc.value: ', value);
  }
};

asyncFunc().then(() => console.log('end of asyncFunc'));

console.log('eof');
