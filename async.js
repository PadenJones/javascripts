async function waiter() {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve('waited');
    }, 1000)
  });
}

waiter().then(response => console.log('response: ', response));

console.log('eof');
