// 12 - Parameters and Defaults
function createTicket(title, priority = "medium", status = "open") {
  return { id: Date.now(), title, priority, status, created: new Date() };
}
console.log(createTicket("Login broken"));
console.log(createTicket("Bug", "high"));

function greet({ name = "Guest" } = {}) { return `Hi ${name}`; }
console.log(greet({ name: "Sam" }));
