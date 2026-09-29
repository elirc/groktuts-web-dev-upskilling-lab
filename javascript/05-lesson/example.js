// 05 - Conditionals
const ticket = { status: "in_progress", priority: "high" };

function getStatusLabel(t) {
  if (!t) return "Unknown";
  if (t.status === "open") {
    return t.priority === "high" ? "URGENT - New" : "New";
  } else if (t.status === "in_progress") {
    return "Being worked on";
  } else if (t.status === "resolved") {
    return "Done";
  }
  return "Archived";
}
console.log(getStatusLabel(ticket));

const rating = 6.8;
const recommendation = rating >= 8 ? "Must watch" : rating >= 6 ? "Worth it" : "Skip";
console.log("Recommendation:", recommendation);

function addToWatchlist(movie) {
  if (!movie || !movie.title) {
    console.log("Invalid movie");
    return;
  }
  console.log("Added:", movie.title);
}
addToWatchlist({ title: "Inception" });
