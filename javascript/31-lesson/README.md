# 31 - Modules (import/export)

## Learning Goal
Split code into files using ES modules.

## Runnable Example

```js
// utils.js
export function slugify(str) { return str.toLowerCase().replace(/\s+/g, "-"); }
export default function format(t) { return t.toUpperCase(); }

// main.js
import format, { slugify } from "./utils.js";
console.log(slugify("My New Movie"));
```
