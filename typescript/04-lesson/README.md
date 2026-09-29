# 04 - Functions and Return Types

```ts
function add(a: number, b: number): number {
  return a + b;
}

type Status = "open" | "closed";
function getStatus(id: number): Promise<Status> { ... }
```
