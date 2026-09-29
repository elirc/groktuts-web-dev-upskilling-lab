import React from "react";
export function Counter() { return <div>0</div>; }
export function Toggle() { return <button></button>; }
export function Timer() { return <div></div>; }
export function Fetcher({url}: any) { return <div></div>; }

// Additional state/effects stubs
export function useCounter(initial = 0) { return { count: 0, inc: ()=>{}, dec:()=>{}, reset:()=>{} }; }
export function useToggle(initial = false) { return [false, ()=>{}] as const; }
export function usePrevious<T>(value: T) { return undefined as T | undefined; }
export function useDebounce<T>(value: T, delay = 300) { return value; }
export function useInterval(callback: () => void, delay: number | null) {}
export function useWindowSize() { return { width: 0, height: 0 }; }
export function useLocalStorageState<T>(key: string, initial: T) { return [initial, ()=>{}] as const; }
export function useFetch(url: string) { return { data: null, loading: true, error: null }; }
export function useClickOutside(ref: any, handler: () => void) {}
export function useMediaQuery(query: string) { return false; }
export function useIdle(timeout = 30000) { return false; }
export function useOnMount(fn: () => void) {}
export function useUpdateEffect(fn: () => void, deps: any[]) {}
export function useWhyDidYouUpdate(name: string, props: any) {}
export function useHover() { return [null, false] as const; }
export function useScrollPosition() { return 0; }
export function useCopyToClipboard() { return [false, async (t:string)=>{}] as const; }
export function useGeolocation() { return null; }
export function useOnlineStatus() { return true; }
