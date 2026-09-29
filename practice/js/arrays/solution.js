// practice/js/arrays/solution.js - FULL WORKING SOLUTIONS

export function removeDuplicatesByProperty(items, prop) {
  const seen = new Set();
  return items.filter(item => {
    const key = item[prop];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function groupByCategory(recipes) {
  return recipes.reduce((acc, r) => {
    const cat = r.category || "uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(r);
    return acc;
  }, {});
}

export function sortByDuration(workouts, direction = "asc") {
  return [...workouts].sort((a, b) => {
    const diff = (a.duration || 0) - (b.duration || 0);
    return direction === "asc" ? diff : -diff;
  });
}

export function paginate(results, page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  return results.slice(start, start + pageSize);
}

export function findTopRated(items) {
  if (!items.length) return null;
  return items.reduce((best, cur) => (cur.rating || 0) > (best.rating || 0) ? cur : best);
}

export function flattenItineraryDays(days) {
  return days.flatMap(day => day.activities || []);
}

export function customMap(arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i], i, arr));
  return out;
}

export function customFilter(arr, predicate) {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) out.push(arr[i]);
  }
  return out;
}

export function customReduce(arr, reducer, initial) {
  let acc = initial;
  let start = 0;
  if (arguments.length < 3) {
    if (arr.length === 0) throw new TypeError();
    acc = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc = reducer(acc, arr[i], i, arr);
  }
  return acc;
}

export function rotateSchedule(slots, k) {
  const n = slots.length;
  if (!n) return [];
  const shift = k % n;
  return [...slots.slice(n - shift), ...slots.slice(0, n - shift)];
}

// ===== GREATLY EXPANDED DRILLS (10x+ more content) =====

// 11. Filter movies by multiple criteria
export function filterMovies(movies, criteria) {
  return movies.filter(m => {
    if (criteria.minRating && m.rating < criteria.minRating) return false;
    if (criteria.watched !== undefined && m.watched !== criteria.watched) return false;
    if (criteria.year && m.year !== criteria.year) return false;
    if (criteria.genre && !m.genres?.includes(criteria.genre)) return false;
    return true;
  });
}

// 12. Calculate average rating per genre
export function averageRatingByGenre(movies) {
  const groups = {};
  movies.forEach(m => {
    (m.genres || []).forEach(g => {
      if (!groups[g]) groups[g] = { sum: 0, count: 0 };
      groups[g].sum += m.rating;
      groups[g].count++;
    });
  });
  return Object.fromEntries(
    Object.entries(groups).map(([g, v]) => [g, +(v.sum / v.count).toFixed(2)])
  );
}

// 13. Find overlapping availability slots between users
export function findCommonAvailability(schedules) {
  if (!schedules.length) return [];
  return schedules.reduce((acc, curr) => acc.filter(slot => curr.includes(slot)));
}

// 14. Chunk array for batch processing (e.g. sending emails)
export function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// 15. Normalize and dedupe tags across recipes
export function uniqueNormalizedTags(recipes) {
  const set = new Set();
  recipes.forEach(r => (r.tags || []).forEach(t => set.add(t.toLowerCase().trim())));
  return Array.from(set).sort();
}

// 16. Compute total watch time for user
export function totalWatchTime(watchlist) {
  return watchlist.filter(m => m.watched).reduce((sum, m) => sum + (m.duration || 0), 0);
}

// 17. Rank items with tie-breaking
export function rankByScore(items, primary, secondary) {
  return [...items].sort((a, b) => {
    const diff = (b[primary] || 0) - (a[primary] || 0);
    if (diff !== 0) return diff;
    return (b[secondary] || 0) - (a[secondary] || 0);
  }).map((item, i) => ({ ...item, rank: i + 1 }));
}

// 18. Merge multiple paginated results without duplicates
export function mergePaginatedResults(pages, idKey = 'id') {
  const seen = new Set();
  const result = [];
  pages.flat().forEach(item => {
    const key = item[idKey];
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  });
  return result;
}

// 19. Detect schedule conflicts
export function hasScheduleConflicts(events) {
  const sorted = [...events].sort((a, b) => a.start - b.start);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].start < sorted[i - 1].end) return true;
  }
  return false;
}

// 20. Transform flat list into tree (e.g. comments)
export function listToTree(items, idKey = 'id', parentKey = 'parentId') {
  const map = {};
  const roots = [];
  items.forEach(item => map[item[idKey]] = { ...item, children: [] });
  items.forEach(item => {
    if (item[parentKey] && map[item[parentKey]]) {
      map[item[parentKey]].children.push(map[item[idKey]]);
    } else {
      roots.push(map[item[idKey]]);
    }
  });
  return roots;
}

// 21. Sample without replacement for recommendations
export function sampleWithoutReplacement(arr, n) {
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < n && copy.length; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

// 22. Group transactions by month
export function groupByMonth(transactions) {
  return transactions.reduce((acc, t) => {
    const month = t.date.slice(0, 7);
    (acc[month] ||= []).push(t);
    return acc;
  }, {});
}

// 23. Find movies watched in same week as a reference
export function moviesWatchedSameWeek(watchlist, referenceDate) {
  const ref = new Date(referenceDate);
  const start = new Date(ref);
  start.setDate(ref.getDate() - ref.getDay());
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return watchlist.filter(m => {
    if (!m.watchedAt) return false;
    const d = new Date(m.watchedAt);
    return d >= start && d <= end;
  });
}

// 24. Weighted random selection (for A/B or recommendations)
export function weightedRandom(items, weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

// 25. Validate no duplicate movie entries per user
export function hasDuplicateMovies(entries) {
  const seen = new Set();
  for (const e of entries) {
    const key = `${e.userId}:${e.movieId}`;
    if (seen.has(key)) return true;
    seen.add(key);
  }
  return false;
}

// 26. Flatten and filter deep activity logs
export function flattenActiveLogs(logs, activeOnly = true) {
  return logs.flatMap(l => l.activities || []).filter(a => !activeOnly || a.completed);
}

// 27. Compute moving average of workout durations
export function movingAverage(values, window) {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    const start = Math.max(0, i - window + 1);
    const slice = values.slice(start, i + 1);
    result.push(slice.reduce((a, b) => a + b, 0) / slice.length);
  }
  return result;
}

// 28. Extract unique cities from travel itinerary
export function uniqueCitiesFromItinerary(days) {
  return [...new Set(days.flatMap(d => d.locations || []))];
}

// 29. Batch process with limited concurrency simulation
export function batchProcess(items, batchSize, processor) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(batch.map(processor));
  }
  return results.flat();
}

// 30. Find top N most frequent categories across all data
export function topCategories(items, categoryKey, n = 5) {
  const counts = {};
  items.forEach(i => {
    const cat = i[categoryKey] || 'uncategorized';
    counts[cat] = (counts[cat] || 0) + 1;
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([cat]) => cat);
}

// 31-60: More JS Array Drills (part of 100 new)
export function dedupeByMultipleProps(items, props) {
  const seen = new Set();
  return items.filter(item => {
    const key = props.map(p => item[p]).join('|');
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });
}

export function sortByMultipleKeys(items, keys) {
  return [...items].sort((a, b) => {
    for (const k of keys) {
      const dir = k.startsWith('-') ? -1 : 1;
      const key = k.replace('-','');
      if (a[key] < b[key]) return -1 * dir;
      if (a[key] > b[key]) return 1 * dir;
    }
    return 0;
  });
}

export function findMissingNumbers(arr, max) {
  const present = new Set(arr);
  return Array.from({length: max}, (_, i) => i+1).filter(n => !present.has(n));
}

export function groupAndAggregate(items, groupKey, aggKey, aggFn) {
  const g = {};
  items.forEach(i => {
    const k = i[groupKey];
    if (!g[k]) g[k] = [];
    g[k].push(i[aggKey]);
  });
  return Object.fromEntries(Object.entries(g).map(([k,v]) => [k, aggFn(v)]));
}

export function rotateLeft(arr, n) {
  const k = n % arr.length;
  return [...arr.slice(k), ...arr.slice(0,k)];
}

export function findConsecutiveSequences(nums) {
  const sorted = [...new Set(nums)].sort((a,b)=>a-b);
  const res = [];
  let cur = [sorted[0]];
  for (let i=1; i<sorted.length; i++) {
    if (sorted[i] === cur[cur.length-1] + 1) cur.push(sorted[i]);
    else { if (cur.length>1) res.push(cur); cur=[sorted[i]]; }
  }
  if (cur.length>1) res.push(cur);
  return res;
}

export function zipArrays(a, b) {
  return a.map((v,i) => [v, b[i]]);
}

export function cartesianProduct(a, b) {
  return a.flatMap(x => b.map(y => [x,y]));
}

export function removeFalsy(arr) {
  return arr.filter(Boolean);
}

export function deepFlatten(arr) {
  return arr.flat(Infinity);
}

export function uniqueWithCount(arr) {
  const m = new Map();
  arr.forEach(x => m.set(x, (m.get(x)||0)+1));
  return Object.fromEntries(m);
}

export function partition(arr, predicate) {
  return [arr.filter(predicate), arr.filter(x=>!predicate(x))];
}

export function sample(arr, n) {
  const copy = [...arr];
  const res = [];
  for(let i=0; i<n && copy.length; i++) {
    res.push(copy.splice(Math.floor(Math.random()*copy.length),1)[0]);
  }
  return res;
}

export function moveItem(arr, from, to) {
  const copy = [...arr];
  const [item] = copy.splice(from,1);
  copy.splice(to,0,item);
  return copy;
}

export function interleave(a, b) {
  const res = [];
  const max = Math.max(a.length, b.length);
  for(let i=0; i<max; i++) {
    if (i<a.length) res.push(a[i]);
    if (i<b.length) res.push(b[i]);
  }
  return res;
}

export function findLongestIncreasingSubseq(nums) {
  // simplified LIS length
  let max = 0;
  for(let i=0; i<nums.length; i++) {
    let len = 1;
    for(let j=i+1; j<nums.length; j++) {
      if (nums[j] > nums[j-1]) len++; else break;
    }
    max = Math.max(max, len);
  }
  return max;
}

// 61-80 more array drills
export function countOccurrences(arr) {
  return arr.reduce((acc, x) => { acc[x] = (acc[x]||0)+1; return acc; }, {});
}

export function shuffle(arr) {
  const a = [...arr];
  for(let i=a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

export function chunkByPredicate(arr, pred) {
  const res = [];
  let cur = [];
  arr.forEach(x => {
    if (pred(x)) { if(cur.length) res.push(cur); cur=[]; }
    else cur.push(x);
  });
  if(cur.length) res.push(cur);
  return res;
}

export function pairwise(arr) {
  return arr.slice(0,-1).map((x,i)=> [x, arr[i+1]]);
}

export function cumulativeSum(arr) {
  let s = 0;
  return arr.map(x => s += x);
}

export function filterOutByProp(main, remove, prop) {
  const toRemove = new Set(remove.map(x=>x[prop]));
  return main.filter(x => !toRemove.has(x[prop]));
}

export function sortByLengthThenAlpha(arr) {
  return [...arr].sort((a,b) => a.length - b.length || a.localeCompare(b));
}

export function extractNumbers(strs) {
  return strs.map(s => parseFloat(s.match(/-?\d+\.?\d*/)?.[0] || 0));
}

export function uniqueBySorted(arr, keyFn) {
  return arr.sort((a,b)=> keyFn(a)-keyFn(b)).filter((x,i,self) => i===0 || keyFn(x) !== keyFn(self[i-1]));
}
