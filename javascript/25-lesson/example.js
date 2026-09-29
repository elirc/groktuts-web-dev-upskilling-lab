// 25 - localStorage (browser)
const KEY = "watchlist-lab";
localStorage.setItem(KEY, JSON.stringify([{t:"Matrix"}]));
console.log(JSON.parse(localStorage.getItem(KEY)));
// In real use: always try/catch
