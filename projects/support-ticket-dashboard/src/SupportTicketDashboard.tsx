import React, { useReducer, useMemo } from "react";
import { TicketForm } from "./components/TicketForm";
import { TicketList } from "./components/TicketList";
import { ticketReducer, initialState } from "./ticketReducer";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TicketStatus, Priority } from "./types";

export function SupportTicketDashboard() {
  const [stored, setStored] = useLocalStorage("tickets", initialState.tickets);
  const [state, dispatch] = useReducer(ticketReducer, { tickets: stored });

  // sync to storage on change
  React.useEffect(() => {
    setStored(state.tickets);
  }, [state.tickets, setStored]);

  const [statusFilter, setStatusFilter] = React.useState<TicketStatus | "all">("all");

  function addTicket(data: { title: string; description: string; priority: Priority }) {
    dispatch({ type: "ADD", ticket: { ...data, status: "open" } });
    return true;
  }

  function changeStatus(id: number, status: TicketStatus) {
    dispatch({ type: "UPDATE_STATUS", id, status });
  }

  const stats = useMemo(() => {
    const total = state.tickets.length;
    const open = state.tickets.filter(t => t.status === "open").length;
    const inProg = state.tickets.filter(t => t.status === "in_progress").length;
    const resolved = state.tickets.filter(t => t.status === "resolved").length;
    return { total, open, in_progress: inProg, resolved };
  }, [state.tickets]);

  return (
    <div>
      <h1>Support Ticket Dashboard</h1>

      <section aria-labelledby="stats">
        <h2 id="stats">Stats</h2>
        <div>Total: {stats.total} | Open: {stats.open} | In Progress: {stats.in_progress} | Resolved: {stats.resolved}</div>
      </section>

      <section>
        <h2>Create Ticket</h2>
        <TicketForm onSubmit={addTicket} />
      </section>

      <section>
        <h2>Filters</h2>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </section>

      <TicketList 
        tickets={state.tickets} 
        filterStatus={statusFilter} 
        onStatusChange={changeStatus} 
      />

      {/* useReducer version note: already powered by reducer above */}
    </div>
  );
}
