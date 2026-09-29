// 04 - Booleans and Comparisons
const movieRating = 8.4;
const isWatched = false;
const isInWatchlist = true;

const canRecommend = movieRating >= 7.5 && !isWatched;
console.log("Recommend?", canRecommend);

const budget = 0;
console.log("Has funds?", budget > 0);

console.log(Boolean(""), Boolean("hello"), Boolean(0), Boolean([]));

const hasTitle = "The Matrix";
const year = 1999;
console.log("Valid entry:", !!(hasTitle && year));
