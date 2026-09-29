interface Ticket { title: string; assignee?: string | null; }
const t: Ticket = { title: "Bug" };
console.log(t.assignee ?? "unassigned");
