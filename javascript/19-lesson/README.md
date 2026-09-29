# 19 - Destructuring

## Learning Goal
Extract values from objects and arrays cleanly.

## Runnable Example

```js
const { title, rating = 0 } = { title: "Alien", rating: 8.5 };
console.log(title, rating);

const [first, , third] = ["a","b","c","d"];
console.log(first, third);

function printTicket({ id, title, priority = "low" }) {
  console.log(`#${id}: ${title} [${priority}]`);
}
printTicket({ id: 5, title: "Crash on load" });
```
