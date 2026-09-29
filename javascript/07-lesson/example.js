// 07 - Array Methods
const movies = [
  { id: 1, title: "The Matrix", rating: 8.7, watched: true },
  { id: 2, title: "Dune", rating: 8.0, watched: false },
  { id: 3, title: "Inception", rating: 8.8, watched: true }
];

console.log("Found Dune:", movies.find(m => m.title === "Dune"));
console.log("Has high rated?", movies.some(m => m.rating > 8.5));
console.log("All watched?", movies.every(m => m.watched));
console.log("Includes id 2?", [1,2,3].includes(2));

movies.forEach(m => console.log(m.title, m.watched ? "seen" : "pending"));
