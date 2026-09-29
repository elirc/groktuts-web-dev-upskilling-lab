export function formatId(id: string | number): string {
  return typeof id === "string" ? id.toUpperCase() : `ID-${id}`;
}
export function getTicketTitle(t: {title?: string} | null | undefined): string {
  return t?.title ?? "Untitled";
}
export type Shape = {kind:"circle", r:number} | {kind:"rect", w:number, h:number};
export function area(s: Shape): number {
  if (s.kind === "circle") return Math.PI * s.r * s.r;
  return s.w * s.h;
}
