// 14 - Arrow Functions
const double = n => n * 2;
const movies = [{rating:9},{rating:7}];
console.log(movies.filter(m => m.rating > 8).map(m => m.rating));
console.log(double(5));
const habit = name => ({name, streak:0});
console.log(habit("Daily walk"));
