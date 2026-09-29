# 08 - Lists and Keys

Always provide stable unique `key` when mapping.
```jsx
{tickets.map(t => <Ticket key={t.id} ticket={t} />)}
```
