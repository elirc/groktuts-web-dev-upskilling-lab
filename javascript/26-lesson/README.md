# 26 - Fetch Basics

## Learning Goal
Make HTTP requests, handle promises from fetch.

## Runnable Example

```js
async function getFakeMovies() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  if (!res.ok) throw new Error("Failed");
  const data = await res.json();
  return data.map(d => ({ title: d.title }));
}
getFakeMovies().then(console.log).catch(console.error);
```
