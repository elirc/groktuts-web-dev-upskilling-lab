# 10 - useEffect

Side effects: data load, subscriptions, DOM. Cleanup.

```jsx
useEffect(() => {
  const id = setInterval(...);
  return () => clearInterval(id);
}, [deps]);
```
