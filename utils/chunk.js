const randomBetween = require('./randomBetween');

module.exports = function chunk (arr, len) {
  const chunks = [];
  let i = 0;
  const n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += randomBetween(1, arr.length)));
  }

  return chunks;
};
