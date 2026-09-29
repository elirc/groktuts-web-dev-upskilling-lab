# 23 - Events

## Learning Goal
Attach event listeners, handle clicks, input, submit. Event object.

## Runnable Example (browser)

```js
const btn = document.querySelector("#add-movie");
btn.addEventListener("click", (e) => {
  console.log("Clicked", e.target);
  // add movie logic
});

const input = document.querySelector("#search");
input.addEventListener("input", (e) => {
  console.log("Searching for", e.target.value);
});
```
