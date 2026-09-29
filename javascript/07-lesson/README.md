# 07 - Array Methods (forEach, find, some, every, includes)

## Learning Goal
Use powerful built-in array methods instead of manual loops for searching and iteration.

## Real-World Use Case
Find a specific recipe by name, check if any workout has "squat", verify every ticket is resolved, search watchlist.

## Concepts Covered
- `.forEach`
- `.find` / `.findIndex`
- `.some` / `.every`
- `.includes`
- When to use each vs manual loop

## Runnable Example

```js
const movies = [
  { id: 1, title: "The Matrix", rating: 8.7, watched: true },
  { id: 2, title: "Dune", rating: 8.0, watched: false },
  { id: 3, title: "Inception", rating: 8.8, watched: true }
];

const dune = movies.find(m => m.title === "Dune");
console.log("Found:", dune);

const hasHighRated = movies.some(m => m.rating > 8.5);
console.log("Has highly rated?", hasHighRated);

const allWatched = movies.every(m => m.watched);
console.log("All watched?", allWatched);

const ids = [1, 2, 3];
console.log("Includes 2?", ids.includes(2));

movies.forEach(movie => {
  console.log(`${movie.title} — ${movie.watched ? "seen" : "pending"}`);
});
```

## Common Mistakes
- Using `.forEach` and expecting it to return a value (it returns undefined).
- Using `.find` when you need all matches — use filter instead.
- Forgetting that `.some`/`.every` short-circuit.

## Try Changing This
- Use `.findIndex` to get position of "Inception".
- Check if any movie rating < 7.

## Mini Challenge
Given workouts array, find the first "long" session (>45min), check if any has "deadlift", verify every session completed.
