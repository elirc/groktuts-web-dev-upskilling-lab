// 21 - Callbacks
function process(data, ok, err) {
  data ? ok(data.map(x=>x.toUpperCase())) : err("empty");
}
process(["matrix","dune"], r=>console.log(r), e=>console.log(e));
