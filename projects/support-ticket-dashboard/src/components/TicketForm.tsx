import React, { useState } from "react";
import { Priority, TicketStatus } from "../types";

interface Props {
  onSubmit: (data: { title: string; description: string; priority: Priority }) => boolean;
}

export function TicketForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const t = title.trim();
    if (!t || t.length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }
    const ok = onSubmit({ title: t, description: description.trim(), priority });
    if (ok) {
      setTitle("");
      setDescription("");
      setPriority("medium");
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Create new ticket">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          aria-invalid={!!error}
        />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select id="priority" value={priority} onChange={e => setPriority(e.target.value as Priority)}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      {error && <div role="alert">{error}</div>}
      <button type="submit">Create Ticket</button>
    </form>
  );
}
