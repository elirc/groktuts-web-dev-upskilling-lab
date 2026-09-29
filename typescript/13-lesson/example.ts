function identity<T>(x: T): T { return x; }
console.log(identity<string>("hello"));
interface Container<T> { value: T; }
const c: Container<number> = {value: 7};
