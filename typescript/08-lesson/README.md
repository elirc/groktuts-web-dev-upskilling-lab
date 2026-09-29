# 08 - Union Types

```ts
type TicketStatus = "open" | "in_progress" | "resolved" | "rejected";

function isActive(s: TicketStatus): boolean {
  return s === "open" || s === "in_progress";
}
```
