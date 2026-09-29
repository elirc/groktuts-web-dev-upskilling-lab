// 32 - Advanced Promises
Promise.allSettled([Promise.resolve(1), Promise.reject("err")])
  .then(r => console.log("allSettled:", r.length));
Promise.race([new Promise(r=>setTimeout(()=>r("fast"),10)), Promise.resolve("slow")])
  .then(console.log);
