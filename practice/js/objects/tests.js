import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as sol from "./solution.js";

describe("JS Objects Practice", () => {
  it("deepClone", () => {
    const o = {a:{b:1}}; const c = sol.deepClone(o); c.a.b=99; assert.notEqual(o.a.b, 99);
  });
  it("getNested", () => {
    assert.equal(sol.getNested({user:{profile:{name:"Sam"}}}, "user.profile.name"), "Sam");
    assert.equal(sol.getNested({}, "a.b"), undefined);
  });
  it("pick/omit", () => {
    const u = {id:1, name:"A", email:"a@b"};
    assert.deepEqual(sol.pick(u, ["id","name"]), {id:1, name:"A"});
    assert.ok(!sol.omit(u, ["email"]).email);
  });
  it("toQueryParams", () => {
    assert.equal(sol.toQueryParams({page:2, q:"hi"}), "page=2&q=hi");
  });
  it("countByStatus + normalize", () => {
    const ts = [{id:1,status:"open"},{id:2,status:"open"}];
    assert.equal(sol.countByStatus(ts).open, 2);
    assert.equal(sol.normalizeById(ts)[1].status, "open");
  });
});
