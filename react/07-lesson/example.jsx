function Ticket({status}) {
  if (status === "resolved") return <span>Done</span>;
  return <span>{status}</span>;
}
