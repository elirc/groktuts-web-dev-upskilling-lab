# 09 - Forms and Controlled Inputs

State owns the value.
```jsx
const [title, setTitle] = useState("");
<input value={title} onChange={e => setTitle(e.target.value)} />
```
