function format(v: string | number) {
  if (typeof v === "string") return v.trim();
  return v.toFixed(2);
}
console.log(format(42.123));
