# 13 - Generics

```ts
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

interface Result<T> { data: T; ok: boolean; }

const r: Result<string[]> = { data: ["a"], ok: true };
```
