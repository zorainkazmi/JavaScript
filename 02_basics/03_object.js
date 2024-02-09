// singleton => when create object from constructor it create singleton | when we declared like literals then it will not create singleton
// Object.create

// object literals

const mySym =Symbol("key1")

const JsUser = {
    name: "Zain",
    "full name": "Zorain Kazmi",
    // mySym: "my key1",  // Symbol is not a string so it will give error if we try to access like this
    [mySym]: "my key1",
    age: 19,
    email: "zain@google.com",
    city: "Karachi",
    isLoggedIn: false,
    lastLoginDay: ["monday", "thursday"]
}
// console.log(JsUser);
// myArray = ["h", "i"]
// myArr[0]; myArr[1]

// console.log(JsUser.email)
// console.log(JsUser[email])
// console.log(JsUser["email"])

// console.log(JsUser."full name") // not allowed
// console.log(JsUser.full name) // not allowed
// console.log(JsUser["full name"]) 

// console.log(JsUser.mySym) // Symbol is not a string so it will give error if we try to access like this
// console.log(typeof JsUser.mySym)  // returns String
// console.log(JsUser[mySym]);  
// console.log(typeof [mySym]);     


JsUser.email = "zorainkazmi@gmail.com" // change object value
// Object.freeze(JsUser)  // * prevent object from changes
JsUser.age=25 // can't modify frozen object
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`hello JS user, ${this.name}`);  // to reference same object use this keyword | 
}
console.log(JsUser.greeting);  // result [Function (anonymous)] | this is because it return reference not function
console.log(JsUser.greeting());  // result error not a function | this is because we freeze the object
console.log(JsUser.greetingTwo()); 
