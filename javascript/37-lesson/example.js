// 37 - Performance
console.time("arr");
const a = Array.from({length:5000},(_,i)=>i);
console.timeEnd("arr");
const s = new Set(a);
console.time("has");
s.has(4000);
console.timeEnd("has");
