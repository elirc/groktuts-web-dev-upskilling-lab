# 14 - Arrow Functions

## Learning Goal
Concise syntax, implicit return, lexical `this`.

## Real-World Use Case
Callbacks for map/filter, event handlers, small utils in React.

## Runnable Example

```js
const double = n => n * 2;
const add = (a, b) => a + b;

const movies = [{rating: 9}, {rating: 7}];
const highRatings = movies.filter(m => m.rating > 8).map(m => m.rating);

const createHabit = name => ({ name, streak: 0, created: Date.now() });

console.log(double(5));
console.log(highRatings);
console.log(createHabit("Read 20 pages"));
```
