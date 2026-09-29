# 37 - Performance Basics

## Learning Goal
Measure, avoid unnecessary work, big-O awareness for common ops.

## Runnable Example

```js
console.time("build");
const arr = Array.from({length: 10000}, (_,i) => i);
console.timeEnd("build");

const set = new Set(arr); // O(1) lookup
console.time("lookup");
set.has(9999);
console.timeEnd("lookup");
```
