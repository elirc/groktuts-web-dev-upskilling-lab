# 12 - Discriminated Unions

```ts
type Ticket =
  | { kind: "open"; title: string }
  | { kind: "resolved"; resolution: string };

function describe(t: Ticket) {
  if (t.kind === "open") return t.title;
  return t.resolution;
}
```
