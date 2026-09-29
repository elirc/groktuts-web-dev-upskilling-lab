import { formatId, getTicketTitle, area } from "./solution.js";
import assert from "node:assert/strict";
assert.equal(formatId(42), "ID-42");
assert.equal(getTicketTitle(null), "Untitled");
assert.ok(area({kind:"rect", w:2, h:3}) === 6);
console.log("narrowing ok");
