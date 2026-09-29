import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as s from "./solution.js";

describe("JS Functions", () => {
  it("compose and pipe", () => {
    const add1 = x=>x+1; const dbl = x=>x*2;
    assert.equal(s.compose(dbl, add1)(3), 8);
    assert.equal(s.pipe(add1, dbl)(3), 8);
  });
  it("memoize", () => {
    let calls=0; const f = s.memoize(x=>{calls++;return x*2;});
    f(2); f(2); assert.equal(calls,1);
  });
  it("once", () => {
    let c=0; const o = s.once(()=>++c); o(); o(); assert.equal(c,1);
  });
});
