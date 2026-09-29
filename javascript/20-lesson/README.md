# 20 - Spread and Rest

## Learning Goal
Copy and combine arrays/objects, collect remaining args.

## Runnable Example

```js
const base = { status: "open", priority: "medium" };
const updated = { ...base, priority: "high", updatedAt: Date.now() };
console.log(updated);

const list = [1,2,3];
const extended = [...list, 4, 5];

function sum(...nums) {
  return nums.reduce((a,b)=>a+b, 0);
}
console.log(sum(1,2,3,4));
```
