function useTickets() {
  const [data, set] = useState(null);
  useEffect(() => { fetch("/api/tickets").then(r=>r.json()).then(set); }, []);
  return data;
}
