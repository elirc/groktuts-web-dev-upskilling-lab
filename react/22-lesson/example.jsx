// React Server Component example (conceptual)
// app/page.tsx
export default async function Page() {
  const data = await fetchTickets();
  return <TicketList data={data} />;
}
