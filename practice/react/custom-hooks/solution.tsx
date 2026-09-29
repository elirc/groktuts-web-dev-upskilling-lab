import React, { useState, useEffect } from "react";

export function useCounter(initial = 0) {
  const [count, set] = useState(initial);
  return { count, inc: () => set(c => c+1), dec: () => set(c => c-1), set };
}
export function useToggle(initial = false) {
  const [v, set] = useState(initial);
  return [v, () => set(!v)] as const;
}
export function useLocal<T>(key: string, init: T) {
  const [val, setVal] = useState<T>(() => {
    try { const r=localStorage.getItem(key); return r ? JSON.parse(r) : init; } catch { return init; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }, [key, val]);
  return [val, setVal] as const;
}
export function useDebounce<T>(value: T, ms = 200) {
  const [d, setD] = useState(value);
  useEffect(() => { const id = setTimeout(() => setD(value), ms); return () => clearTimeout(id); }, [value, ms]);
  return d;
}

// 20+ more custom hook drills
export function useOnMount(fn: () => void) { useEffect(fn, []); }

export function useUpdateEffect(fn: () => void, deps: any[]) {
  const isFirst = useRef(true);
  useEffect(() => { if (!isFirst.current) fn(); else isFirst.current=false; }, deps);
}

export function useWhyDidYouUpdate(name: string, props: any) {
  const prev = useRef(props);
  useEffect(() => {
    const changed: any = {};
    Object.keys(props).forEach(k => { if (prev.current[k] !== props[k]) changed[k] = {from: prev.current[k], to: props[k]}; });
    if (Object.keys(changed).length) console.log('[why-did-you-update]', name, changed);
    prev.current = props;
  });
}

export function useHover() {
  const [hovered, set] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const on = () => set(true); const off = () => set(false);
    const el = ref.current; if(!el) return;
    el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off);
    return () => { el.removeEventListener('mouseenter',on); el.removeEventListener('mouseleave',off); };
  }, []);
  return [ref, hovered] as const;
}

export function useScrollPosition() {
  const [pos, set] = useState(0);
  useEffect(() => {
    const h = () => set(window.scrollY);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return pos;
}

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = async (text: string) => { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(()=>setCopied(false),1500); };
  return [copied, copy] as const;
}

export function useGeolocation() {
  const [loc, setLoc] = useState<any>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(p => setLoc(p.coords));
  }, []);
  return loc;
}

export function useOnlineStatus() {
  const [online, set] = useState(navigator.onLine);
  useEffect(() => {
    const on = () => set(true); const off=()=>set(false);
    window.addEventListener('online',on); window.addEventListener('offline',off);
    return () => {window.removeEventListener('online',on); window.removeEventListener('offline',off);};
  }, []);
  return online;
}
