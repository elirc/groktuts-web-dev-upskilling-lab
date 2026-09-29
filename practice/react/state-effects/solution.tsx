import React, { useState, useEffect } from "react";

export function Counter() {
  const [c, set] = useState(0);
  return <button onClick={() => set(c+1)} data-testid="count">{c}</button>;
}
export function Toggle() {
  const [on, set] = useState(false);
  return <button onClick={() => set(!on)} data-testid="toggle">{on ? "ON" : "OFF"}</button>;
}
export function Timer() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT(x => x+1), 100);
    return () => clearInterval(id);
  }, []);
  return <div data-testid="timer">{t}</div>;
}
export function Fetcher({ url }: {url: string}) {
  const [data, set] = useState<string | null>(null);
  useEffect(() => { 
    let active=true; 
    fetch(url).then(r=>r.text()).then(d => active && set(d)).catch(()=>set(null)); 
    return ()=>{active=false;};
  }, [url]);
  return <div>{data ? "loaded" : "loading"}</div>;
}

// 30+ more React state/effects drills
export function useCounter(initial = 0) {
  const [c, set] = useState(initial);
  return { count: c, inc: () => set(c+1), dec: () => set(c-1), reset: () => set(initial) };
}

export function useToggle(initial = false) {
  const [v, set] = useState(initial);
  return [v, () => set(!v)] as const;
}

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => { ref.current = value; }, [value]);
  return ref.current;
}

export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, set] = useState(value);
  useEffect(() => { const t = setTimeout(() => set(value), delay); return () => clearTimeout(t); }, [value, delay]);
  return debounced;
}

export function useInterval(callback: () => void, delay: number | null) {
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
}

export function useWindowSize() {
  const [size, set] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const h = () => set({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return size;
}

export function useLocalStorageState<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(() => {
    try { const item = localStorage.getItem(key); return item ? JSON.parse(item) : initial; } catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(v)); }, [key, v]);
  return [v, setV] as const;
}

export function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch(url).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
}

export function useClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (e: MouseEvent) => { if (!ref.current || ref.current.contains(e.target as Node)) return; handler(); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
}

export function useMediaQuery(query: string) {
  const [matches, set] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    set(m.matches);
    const h = (e: MediaQueryListEvent) => set(e.matches);
    m.addEventListener('change', h);
    return () => m.removeEventListener('change', h);
  }, [query]);
  return matches;
}

export function useIdle(timeout = 30000) {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    let timer: any;
    const reset = () => { clearTimeout(timer); setIdle(false); timer = setTimeout(() => setIdle(true), timeout); };
    const events = ['mousemove','keydown','touchstart'];
    events.forEach(e => window.addEventListener(e, reset));
    reset();
    return () => events.forEach(e => window.removeEventListener(e, reset));
  }, [timeout]);
  return idle;
}
