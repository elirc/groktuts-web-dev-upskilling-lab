// 01 - Variables and Values
// Run with: node javascript/01-lesson/example.js

const recipeName = "Spaghetti Bolognese";
let servings = 4;
let isPublic = true;

console.log(`Recipe: ${recipeName}`);
console.log(`Serves: ${servings}`);

servings = 6;
isPublic = false;

const ingredients = ["beef", "tomato", "onion"];
ingredients.push("garlic");

console.log("Ingredients count:", ingredients.length);
console.log("Final servings:", servings, "| Public:", isPublic);

// Mini challenge starter code (uncomment and complete):
// const workoutName = "...";
// let durationMinutes = ...;
// ...
