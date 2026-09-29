# 17 - Scope, let, const, var

## Learning Goal
Understand block vs function scope, temporal dead zone, why var is dangerous.

## Real-World Use Case
Avoid bugs in loops with closures, understand where variables live in a module.

## Runnable Example

```js
let globalCount = 0;

function run() {
  if (true) {
    let blockScoped = 42;
    const alsoBlock = "hi";
    // var functionScoped = "leaks";
  }
  // console.log(blockScoped); // ReferenceError
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let i =", i), 10); // 0,1,2 correct
}
```
