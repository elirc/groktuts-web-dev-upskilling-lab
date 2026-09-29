interface Recipe { id:number; title:string; servings:number; }
function pick<R extends Recipe, K extends keyof R>(r: R, k: K): R[K] { return r[k]; }
console.log(pick({id:1, title:"Soup", servings:2}, "title"));
