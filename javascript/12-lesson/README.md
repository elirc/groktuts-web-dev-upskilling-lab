# 12 - Parameters and Defaults

## Learning Goal
Use default parameters, destructuring in params, and rest parameters later.

## Real-World Use Case
Default filter values for ticket dashboard, optional config for fetch wrapper.

## Runnable Example

```js
function createTicket(title, priority = "medium", status = "open") {
  return { id: Date.now(), title, priority, status };
}

console.log(createTicket("Login broken"));
console.log(createTicket("Critical bug", "high"));

function greetUser({ name = "Guest", lang = "en" } = {}) {
  return lang === "es" ? `Hola ${name}` : `Hello ${name}`;
}
console.log(greetUser({ name: "Sam" }));
```
