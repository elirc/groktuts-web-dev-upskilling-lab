import React from "react";
export function Greeting({ name }: {name?: string}) { return <div></div>; }
export function TicketRow({ ticket }: any) { return <li></li>; }
export function Stats({ total, open }: any) { return <div></div>; }
export function List({ items, render }: any) { return <ul></ul>; }

// Additional stubs for 100 drills target
export function PriorityBadge({ priority }: any) { return <span></span>; }
export function TicketSummary({ ticket, onClick }: any) { return <div></div>; }
export function UserAvatar({ user, size = 32 }: any) { return <img />; }
export function FilterChip({ label, active, onToggle }: any) { return <button></button>; }
export function PaginatedList({ items, page, pageSize, renderItem }: any) { return <div></div>; }
export function StatsCard({ label, value, trend }: any) { return <div></div>; }
export function SearchInput({ value, onChange, placeholder }: any) { return <input />; }
export function Modal({ isOpen, onClose, children }: any) { return null; }
export function LoadingSpinner({ size = 24 }: any) { return <div></div>; }
export function ErrorMessage({ error }: any) { return null; }
export function EmptyState({ message = "No data" }: any) { return <div></div>; }
export function ProgressBar({ value, max = 100 }: any) { return <progress />; }
export function Tooltip({ text, children }: any) { return <span></span>; }
export function Tabs({ tabs, active, onChange }: any) { return <div></div>; }
export function Accordion({ items }: any) { return <div></div>; }
export function Card({ title, children, footer }: any) { return <div></div>; }
export function DataTable({ columns, data }: any) { return <table></table>; }
export function Breadcrumbs({ items }: any) { return <nav></nav>; }
export function AvatarGroup({ users, max = 3 }: any) { return <div></div>; }
export function ToggleSwitch({ checked, onChange, label }: any) { return <label></label>; }
export function Select({ options, value, onChange }: any) { return <select></select>; }
export function MultiSelect({ options, values, onChange }: any) { return <div></div>; }
export function DatePicker({ value, onChange }: any) { return <input />; }
export function RichTextPreview({ html }: any) { return <div></div>; }
export function NotificationBell({ count }: any) { return <span></span>; }
export function StatusBadge({ status, colorMap }: any) { return <span></span>; }
export function InfiniteScrollList({ items, hasMore, loadMore }: any) { return <div></div>; }
export function DragAndDropList({ items, onReorder }: any) { return <ul></ul>; }
