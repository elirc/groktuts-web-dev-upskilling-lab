# 24 - Forms and Validation

## Learning Goal
Handle form submit, read values, basic client validation.

## Runnable Example

```js
const form = document.querySelector("#new-ticket");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.elements.title.value.trim();
  if (!title) {
    alert("Title required");
    return;
  }
  console.log("Creating ticket:", title);
});
```
