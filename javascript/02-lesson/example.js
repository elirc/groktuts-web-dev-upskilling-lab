// 02 - Strings and Text Processing
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
