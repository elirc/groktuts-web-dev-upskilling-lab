// 33 - Event Loop
console.log("start");
setTimeout(()=>console.log("timeout"),0);
Promise.resolve().then(()=>console.log("promise"));
console.log("end");
// Order: start, end, promise, timeout
