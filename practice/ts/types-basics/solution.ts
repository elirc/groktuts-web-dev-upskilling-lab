export function isPositive(n: number): boolean { return n > 0; }
export interface Ticket { id: number; title: string; status: string; }
export function formatTicket(t: Ticket): string { return `#${t.id} ${t.title} [${t.status}]`; }
export function getPriority(p?: "low"|"medium"|"high"): string { return p || "medium"; }
export function createTicket(data: {title: string}): Ticket { return {id: Date.now(), title: data.title, status: "open"}; }
export type Status = "open" | "closed";
export function describeStatus(s: Status): string { return s === "open" ? "needs attention" : "done"; }
