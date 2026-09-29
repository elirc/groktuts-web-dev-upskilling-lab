// 28 - try/catch
try {
  JSON.parse("not json");
} catch (e) {
  console.log("Caught:", e.message);
}
async function safe() {
  try { await Promise.reject("fail"); } catch(e){ console.log("async caught"); }
}
safe();
