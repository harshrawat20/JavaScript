const accountId=20
let accountEmail="hr14756@gmail.com"
var accountPassword="12345"
accountCity="Agra"
let accountState;

// accountId=2 // not allowed

accountEmail="hr@hr.com"
accountPassword="21212"
accountCity="Pune"

console.log(accountId);
/*
Prefer not use var beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);