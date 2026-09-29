export function compose(...fns) { return x => x; }
export function curry(fn) { return fn; }

export function memoizeWithTTL(fn, ttlMs) { return fn; }
export function throttle(fn, ms) { return fn; }
export function once(fn) { return fn; }
export function partialRight(fn, ...args) { return () => {}; }
export function composeRight(...fns) { return x => x; }
export function pipeRight(...fns) { return x => x; }
export function retry(fn, times, delay) { return fn; }
export function debounceLeading(fn, ms) { return fn; }
export function createEventEmitter() { return {on:()=>{}, emit:()=>{}, off:()=>{}}; }
export function withLogging(fn, name) { return fn; }
export function cacheLast(fn) { return fn; }
export function sequentialPromise(fns) { return Promise.resolve(); }
export function parallelLimit(fns, limit) { return Promise.resolve([]); }
export function makeIdempotent(fn) { return fn; }
export function memoize(fn) { return fn; }
export function once(fn) { return fn; }
export function debounce(fn, ms) { return fn; }
export function throttle(fn, ms) { return fn; }
export function partial(fn, ...args) { return () => {}; }
export function pipe(...fns) { return x => x; }
export function flip(fn) { return (...a) => fn(...a.reverse()); }
