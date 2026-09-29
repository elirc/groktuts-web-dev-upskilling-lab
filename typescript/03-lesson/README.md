# 03 - Type Inference vs Annotations

## Key Idea
TS infers a lot. Annotate when you want to be explicit or when inference can't help.

```ts
let count = 0;           // inferred number
const x: number = 5;     // annotation

function getTicket(id: number) {
  // return type inferred as Ticket | undefined
}
```
