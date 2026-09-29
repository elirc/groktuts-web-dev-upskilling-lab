# 16 - Mapped Types

```ts
type Flags = { [K in "a"|"b"]: boolean };

type MakeOptional<T> = { [K in keyof T]?: T[K] };
```
