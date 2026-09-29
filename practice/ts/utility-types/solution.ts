interface Ticket { id:number; title:string; status:string; priority:string; }
export type TicketUpdate = Partial<Ticket>;
export type TicketPreview = Pick<Ticket, "id"|"title">;
export type CreateTicket = Omit<Ticket, "id">;
export type TicketMap = Record<string, Ticket>;
export function makeUpdate(data: Partial<Ticket>): TicketUpdate { return {...data}; }
export function preview(t: Ticket): TicketPreview { return {id: t.id, title: t.title}; }
