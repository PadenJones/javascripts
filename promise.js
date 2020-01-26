Promise.resolve('static resolve').then(result => console.log(result));
Promise.reject('static reject').catch(error => console.log(error));

const asyncFunc = async(delay) => {
  const response = await new Promise(resolve => setTimeout(() => resolve('resolved!'), delay));

  console.log('asyncFunc: response: ', response);

  return response;
};

asyncFunc(200).then(response => console.log('callback: response: ', response));
