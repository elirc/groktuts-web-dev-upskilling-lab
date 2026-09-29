# 10 - Optional / null / undefined

```ts
interface Event {
  title: string;
  location?: string;          // optional
  maxAttendees: number | null;
}

function getLocation(e: Event): string {
  return e.location ?? "TBD";
}
```
