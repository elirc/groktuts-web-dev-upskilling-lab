// 08 - map / filter / reduce
const movies = [
  { id: 1, title: "The Matrix", rating: 8.7, watched: true, minutes: 136 },
  { id: 2, title: "Dune", rating: 8.0, watched: false, minutes: 155 },
  { id: 3, title: "Inception", rating: 8.8, watched: true, minutes: 148 }
];

const titles = movies.map(m => m.title.toUpperCase());
console.log("Titles:", titles);

const unwatchedHigh = movies
  .filter(m => !m.watched && m.rating >= 8)
  .map(m => m.title);
console.log("Must watch next:", unwatchedHigh);

const totalMinutes = movies
  .filter(m => m.watched)
  .reduce((sum, m) => sum + m.minutes, 0);
console.log("Watched minutes:", totalMinutes);

const byBand = movies.reduce((acc, m) => {
  const band = m.rating >= 8.5 ? "great" : "good";
  acc[band] = (acc[band] || 0) + 1;
  return acc;
}, {});
console.log("By band:", byBand);
