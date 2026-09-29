# 36 - Iterators and Generators

## Learning Goal
Understand iteration protocol and generator functions `function*`.

## Runnable Example

```js
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}
const ids = idGenerator();
console.log(ids.next().value, ids.next().value);
```
