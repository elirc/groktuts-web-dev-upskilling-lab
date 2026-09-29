# 39 - Security Basics for Frontend

## Learning Goal
XSS prevention, never trust input, safe DOM insertion, basic auth token handling.

## Runnable Example

```js
// Dangerous
// element.innerHTML = userInput; // XSS risk

// Safer
const text = document.createTextNode(userInput);
element.appendChild(text);

// Or use textContent
element.textContent = userInput;
```
