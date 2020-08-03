const shuffle = require('./shuffle');

module.exports = function generateBuckets () {
  const records = shuffle(
    Array(1000).fill(0).map((_, index) => index + 1)
  );

  return [
    records.slice(0, 108),
    records.slice(108, 365),
    records.slice(365, 691),
    records.slice(691, 1000)
  ];
};
