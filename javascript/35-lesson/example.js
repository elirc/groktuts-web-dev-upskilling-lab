// 35 - Debounce/Throttle/Memo
function debounce(fn, d) { let t; return (...a) => { clearTimeout(t); t=setTimeout(()=>fn(...a),d); }; }
const log = debounce(q => console.log("debounced",q), 100);
log("a"); log("ab");
function memo(fn) { const c = new Map(); return (x) => c.has(x) ? c.get(x) : (c.set(x, fn(x)), c.get(x)); }
const sq = memo(x=> {console.log("compute"); return x*x;});
console.log(sq(4), sq(4));
