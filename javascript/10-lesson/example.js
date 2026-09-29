// 10 - Nested Objects
const plan = {
  name: "Push Pull Legs",
  days: [{ name: "Push", exercises: [{ name: "Bench Press", sets: 4 }] }]
};

console.log(plan.days[0].exercises[0].name);
const safe = plan.days?.[0]?.exercises?.[0]?.name ?? "No exercise";
console.log("Safe:", safe);
