// 01 - Why TypeScript
// tsc --noEmit typescript/01-lesson/example.ts
interface Ticket { title: string; }
function create(data: Ticket) { return {id:Date.now(), ...data}; }
// create({ titl: "wrong" }); // TS error
console.log("TS catches shape errors at compile time.");
