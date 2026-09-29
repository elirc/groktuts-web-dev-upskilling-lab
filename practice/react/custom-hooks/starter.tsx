import React from "react";
export function useCounter(initial=0) { return {count:0, inc:()=>{}, dec:()=>{}}; }
export function useToggle(initial=false) { return [false, ()=>{}]; }
export function useLocal(key: string, init: any) { return [init, ()=>{}]; }
export function useDebounce(value: string, ms: number) { return value; }

export function useOnMount(fn: () => void) {}
export function useUpdateEffect(fn: () => void, deps: any[]) {}
export function useWhyDidYouUpdate(name: string, props: any) {}
export function useHover() { return [null, false] as const; }
export function useScrollPosition() { return 0; }
export function useCopyToClipboard() { return [false, async (t:string)=>{}] as const; }
export function useGeolocation() { return null; }
export function useOnlineStatus() { return true; }
export function useForm(initial: any) { return { values: initial, setField:()=>{}, errors:{}, setErrors:()=>{}, reset:()=>{} }; }
export function useFetch(url: string) { return { data: null, loading: true, error: null }; }
export function useClickOutside(ref: any, handler: () => void) {}
export function useMediaQuery(query: string) { return false; }
export function useIdle(timeout = 30000) { return false; }
export function useLocalStorageState<T>(key: string, initial: T) { return [initial, ()=>{}] as const; }
export function useInterval(callback: () => void, delay: number | null) {}
export function useWindowSize() { return { width: 0, height: 0 }; }
export function usePrevious<T>(value: T) { return undefined as T | undefined; }
export function useDebounce<T>(value: T, delay = 300) { return value; }
export function useHoverRef() { return [null, false] as const; }
export function useCopy() { return [false, (t:string)=>{}] as const; }
