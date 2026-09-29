type ToArray<T> = T extends any ? T[] : never;
type NumArr = ToArray<number>;
const arr: NumArr = [1,2];
console.log(arr);
