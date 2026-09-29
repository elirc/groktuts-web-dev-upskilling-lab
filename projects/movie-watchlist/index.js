// projects/movie-watchlist/index.js
// Personal Movie Watchlist Dashboard (Vanilla JS)
// Run: node projects/movie-watchlist/index.js

import fs from "fs";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const DATA_FILE = path.join(path.dirname(__filename.startsWith('/') && process.platform === 'win32' ? __filename.slice(1) : __filename), "watchlist-data.json");

// Simulated "API"
async function fakeFetchMovies(query = "") {
  // Simulate network
  await new Promise(r => setTimeout(r, 80));
  const all = [
    { id: 101, title: "The Matrix", year: 1999, rating: 8.7 },
    { id: 102, title: "Dune", year: 2021, rating: 8.0 },
    { id: 103, title: "Inception", year: 2010, rating: 8.8 },
    { id: 104, title: "Everything Everywhere All at Once", year: 2022, rating: 8.8 },
    { id: 105, title: "The Prestige", year: 2006, rating: 8.5 }
  ];
  if (!query) return all;
  const q = query.toLowerCase();
  return all.filter(m => m.title.toLowerCase().includes(q));
}

function load() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function save(list) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}

async function main() {
  console.log("=== PERSONAL MOVIE WATCHLIST DASHBOARD ===\n");

  let watchlist = load();

  // Simulate fetch from "API" + merge
  const fetched = await fakeFetchMovies();
  const merged = [...watchlist];
  fetched.forEach(f => {
    if (!merged.find(m => m.id === f.id)) merged.push({ ...f, watched: false });
  });
  watchlist = merged;
  save(watchlist);

  // Add new via "form"
  function addMovie(title, year = 2024, rating = 7.0) {
    if (!title || title.trim().length < 2) {
      console.log("ERROR: Title too short");
      return false;
    }
    const exists = watchlist.some(m => m.title.toLowerCase() === title.toLowerCase());
    if (exists) {
      console.log("WARN: Already in list");
      return false;
    }
    const newM = { id: Date.now(), title: title.trim(), year, rating, watched: false };
    watchlist.push(newM);
    save(watchlist);
    return true;
  }

  // Toggle watched
  function toggleWatched(id) {
    const m = watchlist.find(x => x.id === id);
    if (m) m.watched = !m.watched;
    save(watchlist);
  }

  // Filters
  function getFiltered(filter = "all") {
    if (filter === "watched") return watchlist.filter(m => m.watched);
    if (filter === "unwatched") return watchlist.filter(m => !m.watched);
    return [...watchlist];
  }

  // Stats
  function getStats() {
    const total = watchlist.length;
    const watched = watchlist.filter(m => m.watched).length;
    const avg = total ? (watchlist.reduce((s, m) => s + m.rating, 0) / total).toFixed(1) : 0;
    return { total, watched, unwatched: total - watched, avgRating: avg };
  }

  // Demo usage
  console.log("Initial load + seeded from fake API...");
  console.log("Current watchlist:", watchlist.map(m => `${m.title} ${m.watched ? "✓" : ""}`));

  console.log("\nAdding new movie via form simulation...");
  addMovie("The Batman", 2022, 7.8);
  addMovie("Bad", 1); // should fail validation

  toggleWatched(watchlist[0].id);

  console.log("\n=== FILTER: UNWATCHED ===");
  console.log(getFiltered("unwatched").map(m => m.title));

  console.log("\n=== STATS ===");
  console.log(getStats());

  console.log("\n=== ERROR STATE DEMO (bad fetch simulation) ===");
  try {
    // simulate failure
    throw new Error("Network timeout");
  } catch (e) {
    console.log("Handled error gracefully:", e.message, "(showing cached data)");
  }

  console.log("\nWatchlist persisted to watchlist-data.json");
  console.log("Done. Extend this file or wire to a real HTML UI.");
}

main().catch(console.error);
