# 16 - Looping Through Arrays and Objects

## Learning Goal
Best patterns for iterating data using for...of, forEach, Object.keys + loop, entries.

## Real-World Use Case
Render list of books, print summary of habit streaks, display ticket counts.

## Runnable Example

```js
const books = [{id:1,title:"Dune"},{id:2,title:"Hyperion"}];
for (const book of books) {
  console.log(book.title);
}

const stats = { open: 4, in_progress: 2, resolved: 12 };
for (const [status, count] of Object.entries(stats)) {
  console.log(`${status}: ${count}`);
}
```
