# Sharded Ordering Challenge
## Background
Bitabase shards data across a potentially large amount of nodes. When searching through a collection, you can specify a limit and offset. If the offset is 0, then the gateway nodes go out to every server node and ask them for their results.

In a setup containing 5 server nodes, this would bring back a total of 50 records, which then get reordered and sliced, before getting forwarded to the client.

However, when an offset is provided, for example 100, then the gateways must currently iterate through all 100 records on each server.

Optimisations can be made, so only the id of the record and the sorting field are brought back for every record, then a final request is made at the end of the slicing to retrieve the full records.

## The challenge
This repo will generate buckets, with 1000 records in total. They are unordered and uneven.

An ideal solution to this challenge will be able to pull back a slice of records from the buckets, ordered, using minimal system resources.

## Getting started
Install and run the tests:

```bash
git clone https://github.com/bitabase/challenge-sharded-ordering.git
cd challenge-sharded-ordering
node test
```

You should see the following:
```bash
challenge-sharded-ordering % node test
assert.js:103
  throw new AssertionError(obj);
  ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
+ actual - expected

+ []
- [
-   91,
-   92,
-   93,
-   94,
-   95,
-   96,
-   97,
-   98,
-   99,
-   100
- ]
    at tenthPage (/tmp/challenge-sharded-ordering/test.js:20:12)
    at /tmp/challenge-sharded-ordering/test.js:22:17
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (/tmp/challenge-sharded-ordering/test.js:22:3)
    at Module._compile (internal/modules/cjs/loader.js:1256:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1277:10)
    at Module.load (internal/modules/cjs/loader.js:1105:32)
    at Function.Module._load (internal/modules/cjs/loader.js:967:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47 {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: [],
  expected: [
    91, 92, 93, 94,  95,
    96, 97, 98, 99, 100
  ],
  operator: 'deepStrictEqual'
}
```
