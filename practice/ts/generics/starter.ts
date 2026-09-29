export function first<T>(arr: T[]): T | undefined { return undefined; }
export function wrap<T>(val: T) { return {val}; }
export interface ApiResult<T> { data?: T; error?: string; }
export function makeResult<T>(d?: T): ApiResult<T> { return {}; }
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] { return []; }
