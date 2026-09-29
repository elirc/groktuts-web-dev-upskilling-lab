// 29 - Closures
function makeCounter() {
  let n = 0;
  return () => ++n;
}
const c = makeCounter();
console.log(c(), c(), c());
