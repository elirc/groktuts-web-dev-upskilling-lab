import { useMemo, memo } from "react";
const filtered = useMemo(() => tickets.filter(t => t.status === "open"), [tickets]);
const MemoCard = memo(TicketCard);
