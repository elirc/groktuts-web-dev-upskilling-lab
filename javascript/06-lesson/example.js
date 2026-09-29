// 06 - Arrays Basics
const watchlist = ["The Matrix", "Inception"];
console.log(watchlist[0]);
console.log("Length:", watchlist.length);

watchlist.push("Interstellar");
watchlist.unshift("Dune");

console.log("Current:", watchlist);

const last = watchlist.pop();
console.log("Popped:", last);

const firstFew = watchlist.slice(0, 2);
console.log("Slice copy:", firstFew);

for (let i = 0; i < watchlist.length; i++) {
  console.log(`${i}: ${watchlist[i]}`);
}
