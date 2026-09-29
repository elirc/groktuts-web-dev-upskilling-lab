# 06 - Arrays Basics

## Learning Goal
Create, access, modify arrays. Understand length, indexing, push/pop/shift/unshift, and basic iteration with for loop.

## Real-World Use Case
Maintain a list of movies in watchlist, a day's workout exercises, list of ingredients, book reading queue.

## Concepts Covered
- Array literal `[]`
- Zero-based indexing
- `.length`
- Mutating methods: push, pop, shift, unshift, splice
- Non-mutating: slice, concat
- `for` loop over indices

## Runnable Example

```js
const watchlist = ["The Matrix", "Inception"];
console.log(watchlist[0]); // The Matrix
console.log(watchlist.length);

watchlist.push("Interstellar");
watchlist.unshift("Dune"); // add to front

console.log("Current list:", watchlist);

const last = watchlist.pop();
console.log("Removed last:", last);

const firstFew = watchlist.slice(0, 2);
console.log("First two (copy):", firstFew);

// Simple loop
for (let i = 0; i < watchlist.length; i++) {
  console.log(i, watchlist[i]);
}
```

## Line-by-Line Explanation
- Arrays are ordered collections. Index starts at 0.
- `.push` and `.pop` operate on the end (fast).
- `.shift`/`.unshift` on front (slower for large arrays).
- `.slice()` returns a shallow copy without mutating.

## Common Mistakes
- Off-by-one errors in loops (`<= length`).
- Forgetting that `arr[99]` creates sparse array.
- Mutating arrays you didn't intend to (shared references).

## Try Changing This
- Use splice to remove the item at index 1.
- Build the array by starting empty and pushing 3 movies.

## Mini Challenge
Start with `const itinerary = ["Paris", "Rome"]`. Add "Barcelona" at start, remove the last city, then loop and print each destination numbered 1,2,3...
