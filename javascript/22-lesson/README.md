# 22 - DOM Selection

## Learning Goal
Query the DOM using modern methods.

## Real-World Use Case
Select movie list container, ticket form elements, habit checkboxes.

## Runnable Example

```html
<!-- In browser console or simple .html -->
<div id="app"></div>
<ul class="movie-list"></ul>
```

```js
const app = document.querySelector("#app");
const movies = document.querySelectorAll(".movie-list li");

console.log(app);
console.log(movies.length);
```
