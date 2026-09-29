# 33 - Event Loop

## Learning Goal
Understand call stack, task queue, microtasks (promises) vs macrotasks (setTimeout).

## Runnable Example

```js
console.log("1");
setTimeout(() => console.log("2 (macrotask)"), 0);
Promise.resolve().then(() => console.log("3 (microtask)"));
console.log("4");
```
