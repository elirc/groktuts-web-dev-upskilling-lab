import { useState } from "react";
function TicketForm() {
  const [title, setTitle] = useState("");
  return <input value={title} onChange={e=>setTitle(e.target.value)} />;
}
