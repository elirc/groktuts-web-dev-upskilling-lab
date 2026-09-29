interface Recipe { id: number; title: string; servings: number; vegan?: boolean; }
const r: Recipe = {id:1, title:"Curry", servings:4 };
console.log(r.title);
