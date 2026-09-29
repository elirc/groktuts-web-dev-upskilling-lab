export function createCounter() { return () => 0; }
export function createSecretHolder(secret) { return { getSecret:()=>"", setSecret:()=>{} }; }
export function createRateLimiter(maxCalls, windowMs) { return () => true; }
export function privateField(obj, key) { return null; }
export function makeCache() { return { get:()=>null, set:()=>{} }; }
export function eventEmitter() { return { on:()=>{}, emit:()=>{} }; }
export function makeStack() { return { push:()=>{}, pop:()=>null }; }
