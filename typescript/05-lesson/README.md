# 05 - Objects and Interfaces

```ts
interface Ticket {
  id: number;
  title: string;
  priority: "low" | "medium" | "high";
  assignee?: string;
}

const t: Ticket = { id: 1, title: "Bug", priority: "high" };
```
