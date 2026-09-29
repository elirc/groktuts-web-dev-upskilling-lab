function computeTotal(items: number[]): number {
  return items.reduce((s, n) => s + n, 0);
}
console.log(computeTotal([10,20]));
