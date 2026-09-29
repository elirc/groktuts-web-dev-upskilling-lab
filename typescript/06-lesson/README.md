# 06 - Type Aliases

```ts
type Priority = "low" | "medium" | "high";
type TicketId = number;

type Ticket = { id: TicketId; priority: Priority; };
```
