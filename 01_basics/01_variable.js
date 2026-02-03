const accountId = 123
let accountEmail = "mayuri@google.com"
var accountPassword = "12345678"
accountCity = "Kolhapur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "mayu@rtac.in"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])