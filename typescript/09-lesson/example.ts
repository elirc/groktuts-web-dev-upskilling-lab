type Filter = "all" | "active" | "done";
function apply(f: Filter) { return f; }
console.log(apply("active"));
