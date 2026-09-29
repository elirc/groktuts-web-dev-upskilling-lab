# 11 - Functions Basics

## Learning Goal
Declare and call functions. Understand declaration vs expression.

## Real-World Use Case
Reusable formatter for movie display, validator for new habit entry, calculator for budget totals.

## Concepts Covered
- Function declaration
- Function expression
- Parameters vs arguments
- Return values
- Calling functions

## Runnable Example

```js
function formatMovie(movie) {
  return `${movie.title} (${movie.year}) — ${movie.rating}`;
}

const getAverage = function (nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};

console.log(formatMovie({ title: "Alien", year: 1979, rating: 8.5 }));
console.log("Avg rating:", getAverage([8.7, 8.0, 9.1]));
```
