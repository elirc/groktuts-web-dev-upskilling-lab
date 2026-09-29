# 28 - try/catch Error Handling

## Learning Goal
Handle runtime errors gracefully.

## Runnable Example

```js
async function safeFetch(url) {
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } catch (err) {
    console.error("Recovering from:", err.message);
    return [];
  }
}
```
