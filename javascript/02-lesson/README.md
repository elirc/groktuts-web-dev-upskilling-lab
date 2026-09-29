# 02 - Strings and Text Processing

## Learning Goal
Master string manipulation: concatenation, template literals, common methods, trimming, case changes, and building dynamic messages.

## Real-World Use Case
Format recipe titles, generate shopping list text, create user-friendly display for workout summaries, clean user input for movie titles.

## Concepts Covered
- Template literals (`` ` ``)
- Common methods: `.trim()`, `.toLowerCase()`, `.toUpperCase()`, `.includes()`, `.slice()`, `.split()`, `.replace()`
- String interpolation
- Immutability of strings

## Runnable Example

```js
const rawTitle = "  Spicy Thai Basil Stir Fry  ";
const title = rawTitle.trim();

const chef = "Alex";
const servings = 3;

const display = `${title} — by ${chef} (serves ${servings})`;
console.log(display);

console.log("Lower:", title.toLowerCase());
console.log("Has 'thai':", title.toLowerCase().includes("thai"));

const tags = "vegan,quick,30min".split(",");
console.log("Tags:", tags);

const short = title.slice(0, 12) + "...";
console.log("Short title:", short);

const cleaned = "Watchlist: The Matrix (1999)".replace(/[()]/g, "");
console.log(cleaned);
```

## Line-by-Line Explanation
- `.trim()` removes leading/trailing whitespace from user input.
- Template literals make readable dynamic strings.
- Methods return new strings (strings are immutable).
- `.split(",")` turns a string into an array.
- `.replace()` with regex can clean characters.

## Common Mistakes
- Forgetting `.trim()` on form inputs leading to " pasta" !== "pasta".
- Chaining without storing result.
- Using `+` concatenation instead of templates (harder to read).

## Try Changing This
- Add `.toUpperCase()` to the display.
- Split on different separator.
- Use replace to turn spaces into dashes for a slug.

## Mini Challenge
Take a movie title input like "  The  Dark  Knight Rises ", trim it, make title case-ish (harder), extract year if present in parens, build a clean watchlist entry string: "The Dark Knight Rises (2008)".
