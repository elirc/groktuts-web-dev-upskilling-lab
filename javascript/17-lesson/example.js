// 17 - Scope
let count = 0;
function demo() {
  if (true) {
    let inside = "block";
    console.log(inside);
  }
}
demo();
for (let i=0; i<3; i++) setTimeout(()=>console.log("loop i=",i), 5);
