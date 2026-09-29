export function first<T>(arr: T[]): T | undefined { return arr[0]; }
export function wrap<T>(val: T) { return { val }; }
export interface ApiResult<T> { data?: T; error?: string; }
export function makeResult<T>(d?: T): ApiResult<T> { return d !== undefined ? {data: d} : {}; }
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] { return items.map(i => i[key]); }
