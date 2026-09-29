// 13 - Return Values
function getVisibleTickets(tickets, filter = {}) {
  if (!Array.isArray(tickets)) return [];
  return tickets.filter(t => !filter.status || t.status === filter.status);
}
console.log(getVisibleTickets([{status:"open"}, {status:"closed"}], {status:"open"}));

function validateEmail(e) {
  if (!e) return {ok:false, error:"Required"};
  return e.includes("@") ? {ok:true} : {ok:false, error:"Bad format"};
}
console.log(validateEmail("user@ex.com"));
