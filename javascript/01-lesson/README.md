# 01 - Variables and Values

## Learning Goal
Understand how to declare, assign, and use variables in JavaScript. Learn the difference between `let`, `const`, and when values are primitives vs references.

## Real-World Use Case
A recipe app stores the current recipe name, servings count, and whether the recipe is public. These values change or stay fixed.

## Concepts Covered
- `let` vs `const`
- Primitive values (string, number, boolean, null, undefined)
- Reassignment rules
- Naming conventions (camelCase)
- `const` with objects/arrays (mutable contents)

## Runnable Example

```js
// javascript/01-lesson/example.js
const recipeName = "Spaghetti Bolognese";
let servings = 4;
let isPublic = true;

console.log(`Recipe: ${recipeName}`);
console.log(`Serves: ${servings}`);

servings = 6;           // OK - let allows reassignment
isPublic = false;       // OK

// const recipeName = "New Name"; // Error! Cannot reassign const

const ingredients = ["beef", "tomato", "onion"];
ingredients.push("garlic"); // OK - array contents can mutate even with const
console.log(ingredients.length); // 4

console.log("Final servings:", servings, "Public:", isPublic);
```

## Line-by-Line Explanation
1. `const recipeName` — constant binding. The variable cannot be reassigned.
2. `let servings` — mutable binding. We can change what value it points to later.
3. Assignment with `=` stores the value.
4. Template literal `` `${}` `` lets us embed values cleanly.
5. Reassigning `servings = 6` works because it was declared with `let`.
6. `const ingredients` cannot be reassigned to a new array, but we can call methods that mutate the existing array.

## Common Mistakes
- Using `var` (avoid it — function scoped, hoisted weirdly).
- Reassigning a `const`.
- Overusing `let` when `const` would communicate "this shouldn't change".
- Poor names like `x`, `data`, `tmp`.

## Try Changing This
- Change `const` to `let` for recipeName and reassign it.
- Try `ingredients = []` after declaration — what error?
- Add a `let isFavorite = false;` and toggle it.

## Mini Challenge
Create variables for a workout: `workoutName` (const), `durationMinutes` (let), `caloriesBurned` (let). Log a summary string. Then increase duration by 10 minutes and log again. Add an array `exercises` using const and push one more exercise.
