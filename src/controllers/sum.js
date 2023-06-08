const axios = require('axios');

module.exports.sum = (a, b) => {
  return a + b;
}

module.exports.fetchData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  // return res.data
  throw new Error('error');
};
