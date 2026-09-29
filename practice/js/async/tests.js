import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as sol from "./solution.js";

describe("Async Practice", () => {
  it("allSettledPolyfill", async () => {
    const res = await sol.allSettledPolyfill([Promise.resolve(1), Promise.reject("x")]);
    assert.equal(res.length, 2);
    assert.equal(res[0].status, "fulfilled");
  });
  it("sequential vs parallel timing rough", async () => {
    const slow = () => new Promise(r => setTimeout(()=>r(1), 20));
    const t0 = Date.now();
    await sol.sequential([slow, slow]);
    const seq = Date.now()-t0;
    const t1 = Date.now();
    await sol.parallel([slow, slow]);
    const par = Date.now()-t1;
    assert.ok(par < seq + 10);
  });
});
