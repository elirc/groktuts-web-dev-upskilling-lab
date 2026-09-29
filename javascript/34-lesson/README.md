# 34 - Map and Set

## Learning Goal
Use Map (key any type, order) and Set (unique values).

## Runnable Example

```js
const ids = new Set([1,2,2,3]);
console.log(ids.size); // 3

const cache = new Map();
cache.set("user:1", {name: "Sam"});
console.log(cache.get("user:1"));
```
