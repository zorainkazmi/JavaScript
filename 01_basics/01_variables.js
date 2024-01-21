const accountId = 144553  // const = can not be changed
let accountEmail = "hi@google.com"  
var accountPassword = "12345" // don't use
accountCity = "Karachi" // not good method



accountId = 2 // not allowed
console.log(accountId);

accountEmail = "hc@hc.com"
console.log(accountEmail);

accountPassword = "91"
console.log(accountPassword);

accountCity = "Islamabad"
console.log(accountCity);


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

let accountState;
console.log(accountState);  //  output = undefine
 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

