const TicketContext = createContext(null);
function Provider({children}) { return <TicketContext.Provider value={data}>{children}</TicketContext.Provider>; }
