// practice/js/arrays/tests.js
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import * as solution from "./solution.js";

const { 
  removeDuplicatesByProperty, groupByCategory, sortByDuration, 
  paginate, findTopRated, flattenItineraryDays, 
  customMap, customFilter, customReduce, rotateSchedule 
} = solution;

describe("JS Arrays Practice - Solution Tests", () => {
  it("removeDuplicatesByProperty", () => {
    const data = [{id:1,title:"a"},{id:2,title:"b"},{id:1,title:"c"}];
    const res = removeDuplicatesByProperty(data, "id");
    assert.equal(res.length, 2);
    assert.equal(res[0].id, 1);
  });

  it("groupByCategory", () => {
    const recs = [{category:"Italian", name:"Pasta"}, {category:"Mexican", name:"Taco"}];
    const g = groupByCategory(recs);
    assert.ok(g.Italian);
    assert.equal(g.Italian.length, 1);
  });

  it("sortByDuration", () => {
    const w = [{duration:45}, {duration:20}, {duration:60}];
    const asc = sortByDuration(w, "asc");
    assert.equal(asc[0].duration, 20);
    const desc = sortByDuration(w, "desc");
    assert.equal(desc[0].duration, 60);
  });

  it("paginate", () => {
    const r = [1,2,3,4,5,6];
    assert.deepEqual(paginate(r, 2, 2), [3,4]);
  });

  it("findTopRated", () => {
    const movies = [{title:"A", rating:7}, {title:"B", rating:9.5}];
    assert.equal(findTopRated(movies).title, "B");
    assert.equal(findTopRated([]), null);
  });

  it("flattenItineraryDays", () => {
    const days = [{day:1, activities:["walk"]}, {day:2, activities:["museum","lunch"]}];
    assert.deepEqual(flattenItineraryDays(days), ["walk","museum","lunch"]);
  });

  it("customMap / customFilter / customReduce", () => {
    const nums = [1,2,3];
    assert.deepEqual(customMap(nums, x => x*2), [2,4,6]);
    assert.deepEqual(customFilter(nums, x => x > 1), [2,3]);
    assert.equal(customReduce(nums, (a,b)=>a+b, 0), 6);
  });

  it("rotateSchedule", () => {
    assert.deepEqual(rotateSchedule(["A","B","C","D"], 1), ["D","A","B","C"]);
    assert.deepEqual(rotateSchedule(["A","B"], 3), ["B","A"]);
  });

  it("expanded drills - filterMovies, chunk, tree, etc", () => {
    const movies = [{title:"A", rating:8, watched:true, year:2020, genres:["scifi"]}, {title:"B", rating:6, watched:false, year:2021, genres:["drama"]}];
    assert.equal(solution.filterMovies(movies, {watched: true}).length, 1);

    const chunks = solution.chunkArray([1,2,3,4,5], 2);
    assert.equal(chunks.length, 3);

    const treeItems = [{id:1}, {id:2, parentId:1}, {id:3, parentId:1}];
    const tree = solution.listToTree(treeItems);
    assert.equal(tree[0].children.length, 2);

    const tx = [{date:"2026-01-15", amount:10}, {date:"2026-01-20", amount:20}];
    const byMonth = solution.groupByMonth(tx);
    assert.ok(byMonth["2026-01"]);

    assert.ok(Array.isArray(solution.topCategories(movies.map(m => ({genre: m.genres?.[0] || "other"})), "genre")));
    assert.ok(solution.dedupeByMultipleProps([{a:1,b:2},{a:1,b:2}], ['a','b']).length === 1);
    assert.equal(solution.zipArrays([1,2],[3,4]).length, 2);
  });
});
