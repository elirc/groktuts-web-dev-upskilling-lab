# 05 - Conditionals

## Learning Goal
Control flow with `if/else`, `else if`, ternary, switch, and early returns.

## Real-World Use Case
Show different UI based on ticket status, calculate different workout intensity recommendations, validate form input before saving a recipe.

## Concepts Covered
- if / else if / else
- Ternary `condition ? a : b`
- Switch (when useful)
- Guard clauses / early returns
- Nesting vs flat logic

## Runnable Example

```js
const ticket = { status: "in_progress", priority: "high" };

function getStatusLabel(t) {
  if (!t) return "Unknown";
  if (t.status === "open") {
    return t.priority === "high" ? "URGENT - New" : "New";
  } else if (t.status === "in_progress") {
    return "Being worked on";
  } else if (t.status === "resolved") {
    return "Done";
  }
  return "Archived";
}

console.log(getStatusLabel(ticket));

const rating = 6.8;
const recommendation = rating >= 8 ? "Must watch" : rating >= 6 ? "Worth it" : "Skip";
console.log(recommendation);

// Guard clause
function addToWatchlist(movie) {
  if (!movie || !movie.title) {
    console.log("Invalid movie");
    return;
  }
  console.log("Added:", movie.title);
}
```

## Line-by-Line Explanation
- `if` checks run top to bottom.
- Ternary is expression — great for assignment or JSX.
- Guard clauses reduce nesting and make happy path clear.

## Common Mistakes
- Deep nesting (`if { if { if } }`).
- Forgetting `break` in switch (fallthrough).
- Using `if (x = 5)` by mistake.

## Try Changing This
- Add "rejected" case.
- Turn the whole getStatusLabel into a single expression with ternaries.

## Mini Challenge
Write a function `getWorkoutAdvice(duration, intensity)` that returns different messages for short/medium/long + low/medium/high. Use early return and ternary.
