# 16 - Performance: memo, useMemo, useCallback

Prevent unnecessary renders.

```jsx
const Expensive = memo(function Expensive({data}) {...});
const filtered = useMemo(() => data.filter(...), [data]);
const handler = useCallback(() => {...}, [deps]);
```
