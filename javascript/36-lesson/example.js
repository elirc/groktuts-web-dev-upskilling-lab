// 36 - Iterators & Generators
function* ticketIds() { let i=100; while(true) yield `TKT-${i++}`; }
const gen = ticketIds(); console.log(gen.next().value); console.log(gen.next().value);
