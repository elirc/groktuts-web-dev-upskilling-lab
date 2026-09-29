export function createCounter(initial = 0) {
  let count = initial;
  return () => ++count;
}
export function createSecretHolder(initialSecret) {
  let secret = initialSecret;
  return {
    getSecret: () => secret,
    setSecret: (s) => { secret = s; }
  };
}
export function createRateLimiter(max, windowMs) {
  let calls = [];
  return () => {
    const now = Date.now();
    calls = calls.filter(t => now - t < windowMs);
    if (calls.length < max) {
      calls.push(now);
      return true;
    }
    return false;
  };
}
export function makeCache() {
  const store = new Map();
  return { get: k => store.get(k), set: (k,v) => store.set(k,v), has: k=>store.has(k) };
}
export function eventEmitter() {
  const listeners = {};
  return {
    on(evt, fn) { (listeners[evt] ||= []).push(fn); },
    emit(evt, data) { (listeners[evt]||[]).forEach(fn=>fn(data)); }
  };
}
export function makeStack() {
  const s = [];
  return { push: v => s.push(v), pop: () => s.pop(), size: () => s.length };
}

// More closure drills
export function createRateLimiterWithReset(max, windowMs) {
  let calls = [];
  let resetAt = Date.now() + windowMs;
  return {
    allow() {
      const now = Date.now();
      if (now > resetAt) { calls = []; resetAt = now + windowMs; }
      calls = calls.filter(t => now - t < windowMs);
      if (calls.length < max) { calls.push(now); return true; }
      return false;
    },
    reset() { calls=[]; }
  };
}

export function privateCounter(initial=0) {
  let n = initial;
  return {
    inc: () => ++n,
    dec: () => --n,
    get: () => n
  };
}

export function memoizedFactory(fn) {
  const cache = new WeakMap();
  return (obj) => {
    if (cache.has(obj)) return cache.get(obj);
    const val = fn(obj);
    cache.set(obj, val);
    return val;
  };
}

export function createPubSub() {
  const subs = {};
  return {
    subscribe(topic, fn) { (subs[topic] ||= []).push(fn); return () => subs[topic] = subs[topic].filter(f=>f!==fn); },
    publish(topic, data) { (subs[topic]||[]).forEach(f=>f(data)); }
  };
}
