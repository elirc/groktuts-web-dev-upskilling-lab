// Runtime tests for TS practice basics (run after compile or use tsx)
import { isPositive, formatTicket, createTicket, describeStatus } from "./solution.js";
import assert from "node:assert/strict";

assert.equal(isPositive(5), true);
const t = createTicket({title: "Bug"});
assert.ok(formatTicket(t).includes("Bug"));
assert.equal(describeStatus("open"), "needs attention");
console.log("types-basics runtime checks passed");
