

const accountId = 14453
let accountEmail="anupkumarr2910@gmail.com"
var ccountpass="12345"
accountCity="jaipur" //it is also possible,memory can be reserved for a variable ,but not a good practice
// accountId=4  //not allowed

let accountstate;
//if we print the variable the the value will be undefined,because it is not defined yet

console.log(accountId);
console.table([accountEmail, ccountpass]);
//display in tabular form of all the variable name defined in console.table
//print multiple variable value with single line

//problem with var keyword is that during the initial stage if a variable is inside any scope like ,inside if,loop the
//if a program used the same variable name and assigned a value then  that value is being used to all places of block
//issue in block scope and functional scope

//let scope is limited inside the  block ,it cannot be accesed outside the block
