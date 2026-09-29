function useCount() {
  const [c, s] = useState(0);
  return { count: c, inc: () => s(c+1) };
}
