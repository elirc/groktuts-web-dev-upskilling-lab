type EvId = string;
type EvStatus = "draft" | "published";
type CalendarEvent = { id: EvId; status: EvStatus; };
const calEventDemo: CalendarEvent = { id: "e1", status: "published" };
console.log(calEventDemo);
