import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as sol from "./solution.js";

describe("Closures Practice", () => {
  it("createCounter", () => {
    const c = sol.createCounter(10); assert.equal(c(),11); assert.equal(c(),12);
  });
  it("secret holder", () => {
    const sh = sol.createSecretHolder("x"); assert.equal(sh.getSecret(),"x"); sh.setSecret("y"); assert.equal(sh.getSecret(),"y");
  });
  it("rate limiter", () => {
    const l = sol.createRateLimiter(2, 1000); assert.equal(l(),true); assert.equal(l(),true); assert.equal(l(),false);
  });
});
