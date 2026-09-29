export type TicketStatus = "open" | "in_progress" | "resolved";
export type Priority = "low" | "medium" | "high";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  priority: Priority;
  createdAt: string;
}
