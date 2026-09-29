// 27 - async/await
async function demo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=1");
    const data = await res.json();
    console.log("Async loaded:", data.length);
  } catch(e){ console.log("demo fetch", e.message); }
}
demo();
