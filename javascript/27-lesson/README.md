# 27 - async / await

## Learning Goal
Write clean asynchronous code.

## Runnable Example

```js
async function loadWatchlist() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=1");
    const posts = await res.json();
    return posts.map(p => ({ id: p.id, title: p.title }));
  } catch (err) {
    console.error("Failed loading", err);
    return [];
  }
}
loadWatchlist().then(console.log);
```
