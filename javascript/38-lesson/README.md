# 38 - Memory Leaks

## Learning Goal
Common causes: forgotten event listeners, growing arrays in closures, detached DOM references.

## Runnable Example

```js
// BAD pattern
let listeners = [];
function addBadHandler(el) {
  const h = () => console.log("leak");
  el.addEventListener("click", h);
  listeners.push({el, h}); // never removed
}

// Better: removeEventListener or AbortController
```
