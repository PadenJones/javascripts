
const a = async () => {
  while (true) {
    await new Promise(resolve => {
      console.log('a');

      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  return 'done';
}

const b = async () => {
  while (true) {
    await new Promise(resolve => {
      console.log('b');

      setTimeout(() => {
        resolve();
      }, 750);
    });
  }

  return 'done';
}

a().then(result => console.log('a: ', result));
b().then(result => console.log('b: ', result));