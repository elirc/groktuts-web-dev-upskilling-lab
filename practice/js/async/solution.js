export async function fetchWithTimeout(url, ms = 5000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    return await res.json();
  } finally { clearTimeout(id); }
}

export async function retry(fn, attempts = 3) {
  let lastErr;
  for (let i=0; i<attempts; i++) {
    try { return await fn(); } catch(e) { lastErr = e; }
  }
  throw lastErr;
}

export async function withConcurrencyLimit(tasks, limit = 2) {
  const results = [];
  let i=0;
  async function worker() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  }
  await Promise.all(Array.from({length: limit}, worker));
  return results;
}

export function debounceAsync(fn, ms) {
  let t;
  return (...a) => new Promise((resolve) => {
    clearTimeout(t);
    t = setTimeout(async () => resolve(await fn(...a)), ms);
  });
}

export async function allSettledPolyfill(promises) {
  return Promise.all(promises.map(p => Promise.resolve(p).then(v=>({status:"fulfilled",value:v}), e=>({status:"rejected",reason:e}))));
}

export async function sequential(tasks) {
  const out = [];
  for (const t of tasks) out.push(await t());
  return out;
}

export async function parallel(tasks) {
  return Promise.all(tasks.map(t=>t()));
}

export function makeTaskQueue(concurrency = 2) {
  const q = [];
  let active = 0;
  async function run() {
    if (active >= concurrency || q.length===0) return;
    active++;
    const {fn, resolve, reject} = q.shift();
    try { resolve(await fn()); } catch(e){ reject(e); }
    active--;
    run();
  }
  return { add: (fn) => new Promise((res,rej)=>{ q.push({fn,res,rej}); run(); }) };
}

// 20+ more async drills
export async function fetchWithRetry(url, retries=3, delay=100) {
  for(let i=0; i<retries; i++) {
    try { const r = await fetch(url); if(r.ok) return await r.json(); } catch(e){}
    await new Promise(r=>setTimeout(r,delay));
  }
  throw new Error('Failed after retries');
}

export async function timeoutPromise(promise, ms) {
  const t = new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),ms));
  return Promise.race([promise, t]);
}

export function cancellablePromise(promise, signal) {
  return new Promise((resolve, reject) => {
    if (signal.aborted) return reject(new Error('aborted'));
    signal.addEventListener('abort', () => reject(new Error('aborted')));
    promise.then(resolve).catch(reject);
  });
}

export async function sequentialMap(items, fn) {
  const res = [];
  for (const x of items) res.push(await fn(x));
  return res;
}

export async function parallelMapWithLimit(items, fn, limit=3) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(Array.from({length: limit}, worker));
  return results;
}

export function createDebouncedAsyncSearch(fn, ms) {
  let t;
  return (...a) => new Promise(res => {
    clearTimeout(t);
    t = setTimeout(async () => res(await fn(...a)), ms);
  });
}

export async function allSettledPolyfill(proms) {
  return Promise.all(proms.map(p => Promise.resolve(p).then(v=>({status:'fulfilled',value:v}), r=>({status:'rejected',reason:r}))));
}

export async function raceWithTimeout(proms, ms) {
  return Promise.race([...proms, new Promise((_,rej)=>setTimeout(()=>rej('timeout'),ms))]);
}
