# 08 - map / filter / reduce

## Learning Goal
Transform, select, and aggregate data using the three powerhouse methods. Understand they are the functional core of array work.

## Real-World Use Case
Turn raw API movie data into display objects, filter only unwatched high-rated movies, compute total minutes watched this month, group recipes by cuisine.

## Concepts Covered
- `.map()` — transform every item
- `.filter()` — keep subset
- `.reduce()` — accumulate to single value or object
- Chaining
- Immutability (new arrays)

## Runnable Example

```js
const movies = [
  { id: 1, title: "The Matrix", rating: 8.7, watched: true, minutes: 136 },
  { id: 2, title: "Dune", rating: 8.0, watched: false, minutes: 155 },
  { id: 3, title: "Inception", rating: 8.8, watched: true, minutes: 148 }
];

const titles = movies.map(m => m.title.toUpperCase());
console.log("Titles:", titles);

const unwatchedHigh = movies
  .filter(m => !m.watched && m.rating >= 8)
  .map(m => m.title);
console.log("Must watch next:", unwatchedHigh);

const totalMinutesWatched = movies
  .filter(m => m.watched)
  .reduce((sum, m) => sum + m.minutes, 0);
console.log("Total watched minutes:", totalMinutesWatched);

const byRatingBand = movies.reduce((acc, m) => {
  const band = m.rating >= 8.5 ? "great" : "good";
  acc[band] = (acc[band] || 0) + 1;
  return acc;
}, {});
console.log(byRatingBand);
```

## Line-by-Line Explanation
- map always returns same length array of transformed items.
- filter keeps only items where callback returns truthy.
- reduce starts with initial value (very important) and builds result.

## Common Mistakes
- Mutating inside map/filter (`push` inside map).
- Forgetting initial value in reduce (gets first element as initial — bugs).
- Overusing reduce for simple sums when reduce is overkill.

## Try Changing This
- Chain to get average rating of watched movies.
- Reduce to build `{ matrix: {...}, dune: {...} }` lookup.

## Mini Challenge
From a workout log, produce: array of exercise names (map), only the ones >30min (filter), total volume (reduce), and a count by type using reduce.
