type UserId = number & { __brand: "UserId" };
function makeUserId(n: number): UserId { return n as UserId; }
const u = makeUserId(5);
console.log(typeof u);
