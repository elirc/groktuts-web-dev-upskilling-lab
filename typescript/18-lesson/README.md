# 18 - Branded Types

```ts
type Brand<T, B> = T & { __brand: B };
type TicketId = Brand<number, "TicketId">;

function createId(n: number): TicketId {
  return n as TicketId;
}
```
