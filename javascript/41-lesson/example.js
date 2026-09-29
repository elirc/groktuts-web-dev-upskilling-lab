// Advanced reduce for complex transformations
const grouped = movies.reduce((acc, movie) => {
  (acc[movie.genre] ||= []).push(movie);
  return acc;
}, {});
