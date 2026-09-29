// 20 - Spread & Rest
const base = {status:"open"};
const next = {...base, priority:"high"};
console.log(next);
const all = [...[1,2], 3];
console.log(all);
function sum(...n) { return n.reduce((a,b)=>a+b,0); }
console.log(sum(5,6,7));
