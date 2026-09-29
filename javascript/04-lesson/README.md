# 04 - Booleans and Comparisons

## Learning Goal
Use boolean logic, comparison operators, truthiness/falsiness, and logical operators (`&& || !`) correctly.

## Real-World Use Case
Decide whether a movie is watchable (rating > 7 && not watched), show "add to workout" button only if valid, filter recipes that are quick AND vegan.

## Concepts Covered
- Comparison: `> < >= <= === !==`
- Logical: `&& || !`
- Truthy / Falsy values
- Short-circuit evaluation
- `Boolean()` coercion

## Runnable Example

```js
const movieRating = 8.4;
const isWatched = false;
const isInWatchlist = true;

const canRecommend = movieRating >= 7.5 && !isWatched;
console.log("Recommend?", canRecommend); // true

const budget = 0;
const hasFunds = budget > 0;
console.log("Has funds?", hasFunds); // false

// Falsy: 0, "", null, undefined, NaN, false
console.log(Boolean(""), Boolean("hello"), Boolean(0), Boolean([])); // false true false true

const hasTitle = "The Matrix";
const year = 1999;
const isValidMovie = hasTitle && year; // truthy check
console.log("Valid entry:", !!isValidMovie);

const canWatch = isInWatchlist || !isWatched;
console.log("Can watch right now?", canWatch);
```

## Line-by-Line Explanation
- `&&` returns the first falsy or last value (short circuits).
- `||` returns first truthy.
- `!!value` forces boolean.
- Arrays/objects are always truthy even when empty.

## Common Mistakes
- Using `=` (assignment) instead of `===`.
- Assuming empty array `[]` is falsy.
- Overusing `||` for defaults without understanding it returns the value.

## Try Changing This
- Change rating to 6. Add `|| isInWatchlist`.
- Check what `[] && "yes"` returns.

## Mini Challenge
Given habit `{ name: "Run", streak: 12, lastDone: "2026-06-20" }`, compute `isOnFire = streak > 7 && lastDone was recent`. Also determine if a ticket `status === "open" || status === "in_progress"`.
