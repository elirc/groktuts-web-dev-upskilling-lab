export function compose(...fns) {
  return x => fns.reduceRight((v, f) => f(v), x);
}
export function pipe(...fns) {
  return x => fns.reduce((v, f) => f(v), x);
}
export function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const k = JSON.stringify(args);
    if (cache.has(k)) return cache.get(k);
    const res = fn(...args);
    cache.set(k, res);
    return res;
  };
}
export function once(fn) {
  let called = false, result;
  return (...a) => { if (called) return result; called=true; return result = fn(...a); };
}
export function debounce(fn, ms=100) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}
export function throttle(fn, ms=100) {
  let last = 0;
  return (...a) => { const now=Date.now(); if(now-last>ms){last=now; fn(...a);} };
}
export function partial(fn, ...pre) { return (...post) => fn(...pre, ...post); }
export function flip(fn) { return (a,b,...rest) => fn(b,a,...rest); }
export function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}

// 30+ more JS function drills
export function memoizeWithTTL(fn, ttlMs) {
  const cache = new Map();
  return (...args) => {
    const k = JSON.stringify(args);
    const hit = cache.get(k);
    if (hit && Date.now() - hit.time < ttlMs) return hit.value;
    const v = fn(...args);
    cache.set(k, {value: v, time: Date.now()});
    return v;
  };
}

export function throttle(fn, ms) {
  let last = 0;
  return (...a) => { const now = Date.now(); if (now - last >= ms) { last=now; fn(...a); } };
}

export function once(fn) {
  let called = false, res;
  return (...a) => { if (!called) { called=true; res=fn(...a); } return res; };
}

export function partialRight(fn, ...args) {
  return (...pre) => fn(...pre, ...args);
}

export function composeRight(...fns) {
  return (x) => fns.reduce((v,f) => f(v), x);
}

export function pipeRight(...fns) {
  return (x) => fns.reduceRight((v,f) => f(v), x);
}

export function retry(fn, times, delay) {
  return async (...a) => {
    for(let i=0; i<times; i++) {
      try { return await fn(...a); } catch(e) { if (i===times-1) throw e; await new Promise(r=>setTimeout(r,delay)); }
    }
  };
}

export function debounceLeading(fn, ms) {
  let t;
  return (...a) => {
    const call = !t;
    clearTimeout(t);
    t = setTimeout(() => t=undefined, ms);
    if (call) fn(...a);
  };
}

export function createEventEmitter() {
  const ev = {};
  return {
    on(evt, fn) { (ev[evt] ||= []).push(fn); },
    emit(evt, ...data) { (ev[evt]||[]).forEach(f => f(...data)); },
    off(evt, fn) { if (ev[evt]) ev[evt] = ev[evt].filter(f=>f!==fn); }
  };
}

export function withLogging(fn, name='fn') {
  return (...a) => { console.log(`Calling ${name}`); const r=fn(...a); console.log(`Done ${name}`); return r; };
}

export function cacheLast(fn) {
  let lastArgs, lastResult;
  return (...a) => {
    if (lastArgs && lastArgs.every((x,i)=>x===a[i])) return lastResult;
    lastArgs = a; lastResult = fn(...a); return lastResult;
  };
}

export function sequentialPromise(fns) {
  return fns.reduce((p, f) => p.then(f), Promise.resolve());
}

export function parallelLimit(fns, limit) {
  // simplified
  return Promise.all(fns.slice(0,limit).map(f=>f()));
}

export function makeIdempotent(fn) {
  const done = new Set();
  return (key, ...a) => {
    if (done.has(key)) return;
    done.add(key);
    return fn(...a);
  };
}
