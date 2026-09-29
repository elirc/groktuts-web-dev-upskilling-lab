import { preview, makeUpdate } from "./solution.js";
import assert from "node:assert/strict";
const t = {id:1, title:"x", status:"o", priority:"h"};
assert.deepEqual(preview(t), {id:1,title:"x"});
assert.ok(makeUpdate({title:"new"}).title);
console.log("utility-types ok");
