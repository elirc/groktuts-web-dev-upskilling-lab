type Statuses = "open"|"closed";
type StatusMap = { [K in Statuses]: number };
const counts: StatusMap = { open: 3, closed: 9 };
console.log(counts);
