// truthy values and falsy values

const userEmail1 = "zain@google.com"

if (userEmail1) {
    console.log("user have email")
} else {
    console.log("user don't have email")
} 

const userEmail2 = ""

if (userEmail2) {
    console.log("user have email")
} else {
    console.log("user don't have email")
} 


// falsy values
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values
// true, "0", "false", " ", [], {}, function(){} any non-zero number(not +0 or -0), not empty string

const emptyArray= []

if (emptyArray.length === 0) {
    console.log("Array is empty")
} 
const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
} 


