// 30 - Classes
class Ticket {
  constructor(title, priority="medium") {
    this.title = title; this.priority = priority;
  }
  label() { return `#${this.priority.toUpperCase()} ${this.title}`; }
}
const t = new Ticket("Fix login");
console.log(t.label());
