let count = 0; // inferred
const id: number = 42;
function makeEvent(name: string) { return {name, date: new Date()}; }
const e = makeEvent("Meetup");
console.log(typeof e.date);
