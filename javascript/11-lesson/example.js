// 11 - Functions Basics
function formatMovie(movie) {
  return `${movie.title} (${movie.year}) — ${movie.rating}`;
}
const getAverage = function (nums) {
  return nums.length ? nums.reduce((a, b) => a + b) / nums.length : 0;
};
console.log(formatMovie({ title: "Alien", year: 1979, rating: 8.5 }));
console.log(getAverage([8.7, 8.0, 9.1]));
