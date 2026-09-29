# 25 - localStorage

## Learning Goal
Persist simple data in browser between refreshes.

## Runnable Example

```js
const KEY = "watchlist";
function save(movies) {
  localStorage.setItem(KEY, JSON.stringify(movies));
}
function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch { return []; }
}

let list = load();
list.push({ title: "The Matrix" });
save(list);
console.log("Loaded count:", load().length);
```
