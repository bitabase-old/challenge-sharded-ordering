const assert = require('assert').strict;
const getRecords = require('./index');

[
  function firstPage () {
    const records = getRecords();

    assert.deepEqual(records, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  },

  function secondPage () {
    const records = getRecords(2);

    assert.deepEqual(records, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  },

  function tenthPage () {
    const records = getRecords(10);

    assert.deepEqual(records, [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
  }
].forEach(fn => fn());

console.log('All tests passed');
