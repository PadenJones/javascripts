const fetch = require('node-fetch');

const main = async () => {
  const response = await fetch('https://www.blueapron.com/cookbook');
  const http = await response.text();

  console.log()
}

main().then(() => console.log('finished'));