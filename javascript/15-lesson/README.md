# 15 - Loops

## Learning Goal
Classic `for`, `while`, `do...while`, `for...of`, `for...in`. When to choose which.

## Real-World Use Case
Process a batch of tickets, sum values, search without array methods for learning.

## Runnable Example

```js
const durations = [30, 45, 60, 20];
let total = 0;
for (let i = 0; i < durations.length; i++) {
  total += durations[i];
}
console.log("Total via for:", total);

let sum = 0;
for (const d of durations) sum += d;
console.log("for...of:", sum);

let count = 0;
while (count < 3) {
  console.log("While tick", count);
  count++;
}
```
