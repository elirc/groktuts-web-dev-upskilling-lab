interface Ev { id: number; title: string; date: string; }
type CreateEv = Omit<Ev, "id">;
const createEvDemo: CreateEv = { title: "Demo", date: "2026-07-01" };
console.log(createEvDemo);
