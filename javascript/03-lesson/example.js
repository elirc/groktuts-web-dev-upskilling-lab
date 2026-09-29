// 03 - Numbers and Math
const baseCalories = 520;
const sets = 5;
const total = baseCalories * sets;
console.log("Total calories this workout:", total);

const averageRating = (4.8 + 4.2 + 5.0 + 3.9) / 4;
console.log("Average rating:", averageRating.toFixed(2));

const pages = Math.ceil(127 / 20);
console.log("Pages needed:", pages);

const price = parseFloat("19.99");
const tax = price * 0.08;
console.log("Price + tax:", (price + tax).toFixed(2));

console.log("Random difficulty:", Math.floor(Math.random() * 10) + 1);

console.log("Floating gotcha:", 0.1 + 0.2);
