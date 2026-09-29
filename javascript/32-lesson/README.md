# 32 - Advanced Promises

## Learning Goal
Promise.all, Promise.allSettled, race, and chaining.

## Runnable Example

```js
const p1 = Promise.resolve("ok");
const p2 = Promise.reject("fail");

Promise.allSettled([p1, p2]).then(results => console.log(results));
```
