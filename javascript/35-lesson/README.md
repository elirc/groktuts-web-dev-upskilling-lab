# 35 - Debounce / Throttle / Memoization

## Learning Goal
Performance utilities for user input and expensive computation.

## Runnable Example

```js
function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

const search = debounce((q) => console.log("Searching:", q), 300);
// search("m"); search("mo"); ... fires once
```
