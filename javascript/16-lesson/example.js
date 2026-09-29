// 16 - Looping arrays/objects
const books = [{id:1,title:"Dune"},{id:2,title:"Hyperion"}];
for (const b of books) console.log(b.title);

const stats = {open:4, resolved:12};
for (const [k,v] of Object.entries(stats)) console.log(k, v);
