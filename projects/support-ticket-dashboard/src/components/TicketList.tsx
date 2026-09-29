import React from "react";
import { Ticket, TicketStatus } from "../types";

interface Props {
  tickets: Ticket[];
  filterStatus?: TicketStatus | "all";
  onStatusChange: (id: number, status: TicketStatus) => void;
}

export function TicketList({ tickets, filterStatus = "all", onStatusChange }: Props) {
  const filtered = filterStatus === "all" 
    ? tickets 
    : tickets.filter(t => t.status === filterStatus);

  if (filtered.length === 0) {
    return <p role="status">No tickets found.</p>;
  }

  return (
    <ul aria-label="Ticket list">
      {filtered.map(ticket => (
        <li key={ticket.id} data-testid={`ticket-${ticket.id}`}>
          <strong>{ticket.title}</strong> — {ticket.priority} — {ticket.status}
          <select
            aria-label={`Change status for ${ticket.title}`}
            value={ticket.status}
            onChange={e => onStatusChange(ticket.id, e.target.value as TicketStatus)}
          >
            <option value="open">open</option>
            <option value="in_progress">in_progress</option>
            <option value="resolved">resolved</option>
          </select>
        </li>
      ))}
    </ul>
  );
}
