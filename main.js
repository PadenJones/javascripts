const mod = require('./module');

const prom = new Promise((resolve, reject) => {
  if (Math.random() > .5) {
    resolve('success');
  } else {
    reject('failure');
  }
});

const makeRequest = async (timeout) => {
  try {
    const response = await prom;
    console.log('response: ', response);
  } catch (e) {
    console.log('error: ', e);
  } finally {
    console.log('cleaning up!');
  }
};

makeRequest().then(result => console.log('result: ', result));

console.log('eof');
