# 09 - Objects Basics

## Learning Goal
Create, read, update plain objects. Understand property access, shorthand, computed keys, and object vs primitive.

## Real-World Use Case
A habit tracker entry, a single movie record, a user profile, a support ticket object.

## Concepts Covered
- Object literals
- Dot vs bracket notation
- Adding/removing properties
- Shorthand `{ title }`
- Computed property names
- `Object.keys`, `Object.values`, `Object.entries`

## Runnable Example

```js
const movie = {
  id: 42,
  title: "Everything Everywhere All at Once",
  rating: 8.8,
  watched: false,
  tags: ["action", "scifi"]
};

console.log(movie.title);
console.log(movie["rating"]);

const key = "watched";
console.log(movie[key]);

const { title, rating } = movie; // preview of destructuring
console.log(title, rating);

movie.watched = true;
movie.year = 2022;
delete movie.tags;

console.log(Object.keys(movie));
console.log(Object.values(movie));
```
