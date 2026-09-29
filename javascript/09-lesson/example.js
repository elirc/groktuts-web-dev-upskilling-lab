// 09 - Objects Basics
const movie = { id: 42, title: "Everything Everywhere All at Once", rating: 8.8, watched: false };
console.log(movie.title);
console.log(movie["rating"]);

const key = "watched";
movie[key] = true;
movie.year = 2022;

console.log("Keys:", Object.keys(movie));
console.log("Values:", Object.values(movie));
