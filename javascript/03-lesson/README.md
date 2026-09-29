# 03 - Numbers and Math

## Learning Goal
Work with numeric values, math operations, rounding, parsing strings to numbers, and common gotchas with floating point.

## Real-World Use Case
Calculate total calories in a workout log, budget remaining, average movie rating, recipe scaling (multiply ingredients), pagination math.

## Concepts Covered
- Arithmetic operators
- `Math` methods: floor, ceil, round, random, min, max
- `parseInt`, `parseFloat`, `Number()`
- `isNaN`, `Number.isFinite`
- Floating point precision issues

## Runnable Example

```js
const baseCalories = 520;
const sets = 5;
const total = baseCalories * sets;
console.log("Total calories this workout:", total);

const averageRating = (4.8 + 4.2 + 5.0 + 3.9) / 4;
console.log("Average rating:", averageRating.toFixed(2));

const pages = Math.ceil(127 / 20); // items per page
console.log("Pages needed:", pages);

const price = parseFloat("19.99");
const tax = price * 0.08;
console.log("Price + tax:", (price + tax).toFixed(2));

console.log("Random workout difficulty (1-10):", Math.floor(Math.random() * 10) + 1);

console.log(0.1 + 0.2); // 0.30000000000000004 — classic gotcha
console.log((0.1 * 10 + 0.2 * 10) / 10); // safer
```

## Line-by-Line Explanation
- Basic `* / + -`.
- `toFixed(2)` returns string for display.
- `Math.ceil` rounds up for page counts.
- `parseFloat` safely turns form string into number.
- Floating point is binary approximation — never use `===` directly for money.

## Common Mistakes
- Using `==` instead of `===` when mixing string and number.
- Forgetting that `parseInt("08")` in old JS could be octal.
- Relying on exact decimal equality for prices.

## Try Changing This
- Scale a recipe: const factor = 2.5; multiply ingredients quantities.
- Use `Math.max` / `Math.min` on an array of workout durations.

## Mini Challenge
Given a list of workout durations in minutes [45, 30, 60, 25], compute total, average (rounded), longest, and shortest. Also safely parse a user input string "  42.5  " and add 15 minutes.
