import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as sol from "./solution.js";

describe("DOM browser practice (mock tolerant)", () => {
  it("createElementWithText", () => {
    const el = sol.createElementWithText("span", "hi");
    assert.equal(el.textContent || el.textContent, "hi");
  });
  it("serializeForm shape", () => {
    const shape = sol.serializeForm(null);
    assert.deepEqual(shape, {});
  });
});
