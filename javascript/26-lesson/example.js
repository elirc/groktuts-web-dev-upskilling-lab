// 26 - Fetch basics
// Note: This runs in Node 18+ or browser.
fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")
  .then(r => r.json())
  .then(d => console.log("Fetched sample count:", d.length))
  .catch(e => console.log("Fetch demo (may need internet):", e.message));
