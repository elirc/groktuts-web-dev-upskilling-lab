// 15 - Loops
const durations = [30, 45, 60, 20];
let total = 0;
for (let i = 0; i < durations.length; i++) total += durations[i];
console.log("for total:", total);

let sum = 0; for (const d of durations) sum += d;
console.log("for of:", sum);
