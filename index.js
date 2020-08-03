const generateBuckets = require('./utils/generateBuckets');

module.exports = (page = 1, itemsPerPage = 10) => {
  const sorter = (a, b) => a >= b ? 1 : -1;

  const start = (page * itemsPerPage) - itemsPerPage;
  const end = ((page * itemsPerPage) + itemsPerPage) - itemsPerPage;

  const buckets = generateBuckets()
    .map(bucket => bucket.sort(sorter))
    .flatMap(bucket => {
      return bucket.slice(0, 10);
    })
    .sort(sorter)
    .slice(start, end);

  return buckets;
};
