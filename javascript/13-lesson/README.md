# 13 - Return Values

## Learning Goal
Functions should return useful values. Learn early return, multiple returns, and that undefined is default.

## Real-World Use Case
Pure functions that compute derived data: filtered list, total cost, validation result.

## Runnable Example

```js
function getVisibleTickets(tickets, filter) {
  if (!tickets) return [];
  return tickets.filter(t => {
    if (filter.status && t.status !== filter.status) return false;
    return true;
  });
}

function validateEmail(email) {
  if (!email) return { ok: false, error: "Required" };
  if (!email.includes("@")) return { ok: false, error: "Invalid" };
  return { ok: true };
}
```
