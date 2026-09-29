# 29 - Closures

## Learning Goal
Functions that "remember" their lexical environment.

## Real-World Use Case
Create private counters, debounce factories, stateful validators.

## Runnable Example

```js
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}
const next = createCounter();
console.log(next()); // 1
console.log(next()); // 2
```
