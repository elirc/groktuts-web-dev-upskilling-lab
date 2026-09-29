function reducer(state, action) {
  if (action.type === "ADD") return [...state, action.ticket];
  return state;
}
const [tickets, dispatch] = useReducer(reducer, []);
