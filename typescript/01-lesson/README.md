# 01 - Why TypeScript Exists

## Learning Goal
Understand static typing benefits: catch errors early, better IDE support, self-documenting code.

## Real-World Use Case
A support ticket system where wrong property access or wrong type passed to functions causes runtime bugs.

## Key Points
- JS is dynamic. Typos and wrong shapes only crash at runtime.
- TS adds types that are erased at runtime (zero cost).
- Enables confident refactors in large codebases.

## Example

```ts
// Without TS: easy to pass wrong shape
function createTicket(data) {
  return { id: Date.now(), ...data };
}
createTicket({ titl: "oops" }); // silent fail

// With TS
interface TicketInput { title: string; priority?: "low"|"medium"|"high"; }
function createTicket(data: TicketInput) { /* ... */ }
```
