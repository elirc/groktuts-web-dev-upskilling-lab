# 11 - Narrowing

Use `typeof`, `in`, discriminated properties, truthiness, and `as const`.

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}
```
