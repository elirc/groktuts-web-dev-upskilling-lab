# 18 - Template Literals

## Learning Goal
Advanced string templates with expressions, tagged templates (brief), multiline.

## Runnable Example

```js
const user = "Sam";
const tickets = 7;
console.log(`Hello ${user}, you have ${tickets} open tickets.`);

const html = `
  <div class="ticket">
    <h2>${user}</h2>
  </div>
`.trim();
```
