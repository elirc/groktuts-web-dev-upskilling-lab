# 15 - Utility Types

Partial, Pick, Omit, Required, Readonly, Record.

```ts
interface Ticket { id: number; title: string; status: string; }

type UpdateTicket = Partial<Ticket>;
type TicketPreview = Pick<Ticket, "id"|"title">;
type TicketWithoutId = Omit<Ticket, "id">;
```
