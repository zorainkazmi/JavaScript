// If statement example
// Comparison operators
// < (less than), > (greater than), <= (less than or equal to), >= (greater than or equal to), == (if it is equal), === (if it is equal with type), != (not equal), !== (not equal with type)

const isUserLoggedIn = true // if the user is logged in not, set to true in this example

if (isUserLoggedIn) { // if true, user has logged in successfully
    console.log("user logged in successful") 
}
console.log("Execute") // log that the code has executed

// ***********************************************************************************************

const temperature = 25 // set the temperature to 25 degrees

if (temperature === 25) { // if the temperature is equal to 25 degrees
   console.log("temperature is 25") // log that the temperature is 25 degrees
} else { // otherwise
   console.log(`temperature is ${temperature}`) // log the actual temperature
}

// ***********************************************************************************************

const score = 200 // set the score to 200

if (score > 100) { // if the score is greater than 100
   let power = "fly" // declare a variable called power and set it to "fly"
   console.log(`User power:: ${power}`) // log the user's power
}
console.log(`User power:: ${power}`) // try to log the user's power, but it is not accessible because it was declared with the "let" keyword

if (score > 100) { // if the score is greater than 100
   var power = "fly" // declare a variable called power and set it to "fly"
   console.log(`User power:: ${power}`) // log the user's power
}
console.log(`User power:: ${power}`) // log the user's power, which is accessible because it was declared with the "var" keyword

// ***********************************************************************************************

const balance = 10000

if (balance > 1500) console.log("test 1"), console.log("test 2")


if (balance < 500) {
    console.log("low balance")
} else if (balance >= 500 && balance <= 1500) {
    console.log("medium balance")
} else {
    console.log("high balance")
}


// ***********************************************************************************************

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("You can make a purchase.")
}  

if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("You can make a purchase.")
}

// Nullish Coalescing Operator (??): null undefine
let val1;
val1 = 5 ?? 10 // if val1 is null or undefined, set it to 10
console.log(val1); // Output: 5

val1 = "" ?? 10 // if val2 is null or empty string,
console .log(val1)

val1 = null ?? 10 ?? 20 // if val1 is null, set it to 10
console.log(val1) // Output: 10

//  Ternary operator

//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Buy Ice Tea") : console.log("Buy Water")



// ***********************************************************************************************

// Optional Chaining (?.): accessing properties of objects that might be null/undefined
// const person = {
//     name: "Zain",
//     age: 25,
//     address: {
//         city: "Dhaka",
//         country: "Bangladesh"
//     }
// }

// const city = person?.address?.city // this will return 'person.address.city
// console.log(city) // Output: Dhaka

// let message = `Hello ${person?.name}` // If person is not defined or
// person.name is not defined, message will be "Hello undefined"
// console.log(message) // Output: Hello undefined






