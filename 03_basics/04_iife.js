// Immediately Invoked Function Expressions (IIFE)
// some time there are pollution due to global scope and to get rid of global scope we use iife

(function coffee() {   // named iife
    console.log(`DB CONNECTED`);
})()

// ()()  // first ()  is for immediate invocation, second one is a self executing function which will be executed immediately when it

( () => {
    console.log(`DB CONNECTED`);
})()  // it will show error because immediate invoke function don't know where to stop the context so we have to end it by ;  in end 

( (name) => {
    console.log(`DB CONNECTED two ${name}`);
})("Zain")  // it will show error because immediate invoke function don't know where to stop the context so we have to end it by ;  in end 



// *************************************************************************************************************************


// In JavaScript, the parentheses around an Immediately Invoked Function Expression (IIFE) are used to make it parse as an expression. 
// This is necessary because the JavaScript parser needs to be able to distinguish between function declarations and function expressions.

// Here's a bit more detail:

// Function Declaration: This is when you define a function using the `function` keyword at the start of a statement, like this:


//*  function greet() {
//*   console.log("Hello, world!");
//*  };


// Function Expression: This is when you define a function as part of another statement, like assigning it to a variable:


//* const greet = function() {
//*   console.log("Hello, world!");
//* };

// An IIFE is a function expression that's immediately invoked. So, you need to wrap it in parentheses to make it parse as an expression. 
// Without the parentheses, JavaScript would try to parse it as a function declaration, which would cause an error because function declarations can't be immediately invoked.

// So, in an arrow function IIFE, the parentheses look like this:


//* (() => {
//*   console.log("Hello, world!");
//* })();




