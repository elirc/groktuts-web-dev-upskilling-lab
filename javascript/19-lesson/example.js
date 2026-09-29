// 19 - Destructuring
const {title, rating=0} = {title:"Alien", rating:8.5};
console.log(title, rating);
const [a,,c] = [10,20,30]; console.log(a,c);
function show({title}) { console.log(title); }
show({title:"Dune"});
