# 30 - Prototypes and Classes

## Learning Goal
Modern class syntax and inheritance basics.

## Runnable Example

```js
class Movie {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }
  isHighlyRated() {
    return this.rating >= 8;
  }
}

const m = new Movie("The Prestige", 8.5);
console.log(m.isHighlyRated());
```
