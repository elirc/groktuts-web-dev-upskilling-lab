type CalEvent = { kind:"meetup"; city:string } | { kind:"webinar"; link:string };
function label(e: CalEvent) { return e.kind === "meetup" ? e.city : e.link; }
console.log(label({kind:"meetup", city:"NYC"}));
