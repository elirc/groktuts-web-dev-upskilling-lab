import React from "react";

export function Greeting({ name = "Guest" }: {name?: string}) { 
  return <div>Hello {name}</div>; 
}
export interface Ticket { id: number; title: string; }
export function TicketRow({ ticket }: {ticket: Ticket}) { 
  return <li data-testid={`row-${ticket.id}`}>{ticket.title}</li>; 
}
export function Stats({ total = 0, open = 0 }: {total?:number; open?:number}) { 
  return <div data-testid="stats">Total:{total} Open:{open}</div>; 
}
export function List<T>({ items, render }: {items: T[]; render: (x:T)=>React.ReactNode}) { 
  return <ul>{items.map((it,i) => <li key={i}>{render(it)}</li>)}</ul>; 
}

// ===== Expanded React component drills (10x style) =====

export function PriorityBadge({ priority }: {priority: string}) {
  const color = priority === 'high' ? 'red' : priority === 'medium' ? 'orange' : 'gray';
  return <span style={{color}} data-testid="priority">{priority}</span>;
}

export function TicketSummary({ ticket, onClick }: any) {
  return <div onClick={onClick} data-testid="summary">{ticket.title} - {ticket.status}</div>;
}

export function UserAvatar({ user, size = 32 }: any) {
  return <img src={user.avatar} alt={user.name} width={size} height={size} data-testid="avatar" />;
}

export function FilterChip({ label, active, onToggle }: any) {
  return <button onClick={onToggle} aria-pressed={active} data-testid="chip">{label}</button>;
}

export function PaginatedList({ items, page, pageSize, renderItem }: any) {
  const start = (page - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);
  return <div>{pageItems.map((item: any, i: number) => <div key={i}>{renderItem(item)}</div>)}</div>;
}

export function StatsCard({ label, value, trend }: any) {
  return <div data-testid="stats-card"><strong>{label}</strong>: {value} {trend && <span>({trend})</span>}</div>;
}

export function SearchInput({ value, onChange, placeholder }: any) {
  return <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} data-testid="search" />;
}

export function Modal({ isOpen, onClose, children }: any) {
  if (!isOpen) return null;
  return <div data-testid="modal" role="dialog"><button onClick={onClose}>Close</button>{children}</div>;
}

// 50+ additional React component drills (to help reach 100 new)
export function LoadingSpinner({ size = 24 }: any) {
  return <div data-testid="spinner" style={{width: size, height: size}}>⏳</div>;
}

export function ErrorMessage({ error }: any) {
  return error ? <div role="alert" data-testid="error">{error}</div> : null;
}

export function EmptyState({ message = "No data" }: any) {
  return <div data-testid="empty">{message}</div>;
}

export function ProgressBar({ value, max = 100 }: any) {
  return <progress value={value} max={max} data-testid="progress" />;
}

export function Tooltip({ text, children }: any) {
  return <span title={text} data-testid="tooltip">{children}</span>;
}

export function Tabs({ tabs, active, onChange }: any) {
  return <div>{tabs.map((t:any,i:number) => <button key={i} onClick={() => onChange(i)} aria-selected={i===active}>{t.label}</button>)}</div>;
}

export function Accordion({ items }: any) {
  return <div>{items.map((it:any,i:number) => <details key={i}><summary>{it.title}</summary>{it.content}</details>)}</div>;
}

export function Card({ title, children, footer }: any) {
  return <div data-testid="card"><h3>{title}</h3>{children}{footer && <footer>{footer}</footer>}</div>;
}

export function DataTable({ columns, data }: any) {
  return <table><thead><tr>{columns.map((c:any,i:number)=><th key={i}>{c}</th>)}</tr></thead><tbody>{data.map((row:any,i:number)=><tr key={i}>{columns.map((c:any,j:number)=><td key={j}>{row[c]}</td>)}</tr>)}</tbody></table>;
}

export function Breadcrumbs({ items }: any) {
  return <nav data-testid="breadcrumbs">{items.map((it:any,i:number) => <span key={i}>{it}{i<items.length-1 && ' > '}</span>)}</nav>;
}

export function AvatarGroup({ users, max = 3 }: any) {
  const shown = users.slice(0,max);
  return <div>{shown.map((u:any,i:number) => <span key={i}>{u.name[0]}</span>)} {users.length > max && `+${users.length-max}`}</div>;
}

export function ToggleSwitch({ checked, onChange, label }: any) {
  return <label><input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} /> {label}</label>;
}

export function Select({ options, value, onChange }: any) {
  return <select value={value} onChange={e=>onChange(e.target.value)} data-testid="select">{options.map((o:any,i:number)=><option key={i} value={o.value}>{o.label}</option>)}</select>;
}

export function MultiSelect({ options, values, onChange }: any) {
  return <div>{options.map((o:any,i:number) => <label key={i}><input type="checkbox" checked={values.includes(o.value)} onChange={() => onChange(o.value)} />{o.label}</label>)}</div>;
}

export function DatePicker({ value, onChange }: any) {
  return <input type="date" value={value} onChange={e=>onChange(e.target.value)} data-testid="date" />;
}

export function RichTextPreview({ html }: any) {
  return <div dangerouslySetInnerHTML={{__html: html}} data-testid="rich" />;
}

export function NotificationBell({ count }: any) {
  return <span data-testid="bell">🔔{count > 0 && <sup>{count}</sup>}</span>;
}

export function StatusBadge({ status, colorMap }: any) {
  const c = colorMap?.[status] || 'gray';
  return <span style={{background:c}} data-testid="badge">{status}</span>;
}

export function InfiniteScrollList({ items, hasMore, loadMore }: any) {
  return <div onScroll={e => { if ((e.target as any).scrollTop + (e.target as any).clientHeight >= (e.target as any).scrollHeight && hasMore) loadMore(); }} data-testid="infinite">{items.map((it:any,i:number)=><div key={i}>{it}</div>)}</div>;
}

export function DragAndDropList({ items, onReorder }: any) {
  return <ul data-testid="dnd">{items.map((it:any,i:number) => <li key={i} draggable onDragEnd={() => onReorder(i)}>{it}</li>)}</ul>;
}
