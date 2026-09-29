# 21 - Callbacks

## Learning Goal
Understand passing functions as values. Foundation for async and array methods.

## Runnable Example

```js
function processData(data, onSuccess, onError) {
  if (!data) return onError("No data");
  onSuccess(data.map(d => d.toUpperCase()));
}

processData(["a","b"], 
  result => console.log("OK", result), 
  err => console.error("Fail", err)
);
```
