# 17 - Conditional Types

```ts
type IsString<T> = T extends string ? true : false;

type ApiResponse<T> = T extends string ? { message: T } : { data: T };
```
