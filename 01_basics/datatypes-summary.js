// Primitive and Non Primitive

//  Primitive
//  these are called by values 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const name = "Zain"
const score = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId) // false

const bigNumber = 13453646457457548769707n


// ___________________________________________________________________________________________________________________________

/* Reference (Non primitive)
 these are called by reference
*/

// Array, Objects, Functions 

const heros = ["iron-man", "superman", "spider-man"]

let myObj={
    name: "Zain",
    age: 19,
}

const myFunction = function(){
    // console.log("hello world");
}

// console.log(typeof bigNumber);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
    //    Number     => number
    //    String     => string
    //    Boolean    => boolean
    //    null       => object
    //    undefined  =>  undefined
    //    Symbol     =>  symbol
    //    BigInt     =>  bigint

// 2) Non-primitive Datatypes
    //    Arrays    =>  object
    //    Function  =>  function
    //    Object    =>  object

// ___________________________________________________________________________________________________________________________

//  Note: If you want to master js then master 2 thing Object and web-event / browser-event; 

// Is JavaScript Dynamic-type language or Static-type language?

// ___________________________________________________________________________________________________________________________

//     Memory
//  Stack memory (Primitive), Heap memory (non-Primitive)
// In Stack memory -> We have a copy of variable that we declared, => changes occurs in copy variable
// Example:-
let myname = "Zain"

let myanothername = myname
myanothername = "Zorain"

console.log(myname);
console.log(myanothername);



// ___________________________________________________________________________________________________________________________

// In Heap memory -> We have a pointer/reference to original variable that we declared, => changes occurs in original variable
// Example:-
let userOne = {
    email: "zee@google.com",
    payId: "zeee@ubl.com"
} 

let userTwo = userOne;

userTwo.email = "Zorainkazmi@google.com"

console.log(userOne.email);
console.log(userTwo.email);



// ___________________________________________________________________________________________________________________________
