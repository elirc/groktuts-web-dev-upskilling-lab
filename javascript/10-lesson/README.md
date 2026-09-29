# 10 - Nested Objects

## Learning Goal
Safely work with deeply nested data from APIs. Understand references and shallow vs deep operations.

## Real-World Use Case
API response for a workout plan that has days → exercises → sets. Or complex recipe with nutrition and steps.

## Concepts Covered
- Accessing `obj.a.b.c`
- Optional chaining `?.` (modern)
- Nullish coalescing `??`
- Shallow copy issues
- JSON.parse/stringify for simple deep clone (limitations)

## Runnable Example

```js
const plan = {
  name: "Push Pull Legs",
  days: [
    { name: "Push", exercises: [{ name: "Bench", sets: 4 }] }
  ]
};

console.log(plan.days[0].exercises[0].name);

// Safe access
const firstEx = plan.days?.[0]?.exercises?.[0]?.name ?? "Rest day";
console.log(firstEx);

const user = { profile: { settings: { theme: "dark" } } };
const theme = user.profile?.settings?.theme ?? "light";
console.log(theme);
```
