import { Ticket, TicketStatus, Priority } from "./types";

export type Action =
  | { type: "ADD"; ticket: Omit<Ticket, "id" | "createdAt"> }
  | { type: "UPDATE_STATUS"; id: number; status: TicketStatus }
  | { type: "DELETE"; id: number };

export interface State {
  tickets: Ticket[];
}

export function ticketReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const newTicket: Ticket = {
        ...action.ticket,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      return { tickets: [newTicket, ...state.tickets] };
    }
    case "UPDATE_STATUS":
      return {
        tickets: state.tickets.map(t =>
          t.id === action.id ? { ...t, status: action.status } : t
        ),
      };
    case "DELETE":
      return {
        tickets: state.tickets.filter(t => t.id !== action.id),
      };
    default:
      return state;
  }
}

export const initialState: State = { tickets: [] };
