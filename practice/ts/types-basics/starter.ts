export function isPositive(n: any): boolean { return false; }
export function formatTicket(t: any): string { return ""; }
export function getPriority(p?: any): string { return "medium"; }
export interface Ticket { title: string; }
export function createTicket(data: any): Ticket { return {title:""}; }
export type Status = "open";
export function describeStatus(s: Status): string { return ""; }
