# 14 - keyof and Indexed Access

```ts
interface Ticket { id:number; title:string; }
type TicketKey = keyof Ticket; // "id" | "title"

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```
