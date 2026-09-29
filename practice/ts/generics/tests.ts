import { first, wrap, pluck, makeResult } from "./solution.js";
import assert from "node:assert/strict";
assert.equal(first([3,2]), 3);
assert.deepEqual(wrap("hi"), {val:"hi"});
assert.deepEqual(pluck([{n:1},{n:2}], "n"), [1,2]);
assert.ok(makeResult(7).data === 7);
console.log("generics ok");
