// JavaScript Execution Context  -> how js execute your file how run your file

// {code file}    -> global execution context  -> referred to this variable -> window object in the browser

// global execution context  
// functional execution context
// eval execution context

// single threaded 

// {code file}  -> run in tow phases
// 1. Memory creation phase   -> anything we declared it only allocate memory
// 2. Execution phase  -> execution is done in the order of declaration

// for example

let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;    
}
let result1 = addNum(val1, val2);
let result2 = addNum(5, 2);

// step1: global execution context created / global environment  -> any code weather it is larger or smaller it is rum from global execution  ->  and it is first allocated in "this"
// step2: memory phase -> val1 -> undefine 
//                        val2 -> undefine
//                        addNum -> definition (definition of function = function name + function body)
//                        result1 -> undefine       
//                        result2 -> undefine

// step3: execution phase -> val1 <- 10
//                           val2 <- 20
// let result1 = addNum(val1, val2); on this it come to addNum because in function there is no execution 
//                           addNum() -> create new execution context -> create new variable environment + execution thread    
//                           result1 <- 30
// every time we call a function it create a new execution context in which we have to perform memory phase and execution phase again 

// memory phase for new execution context: -> val1 -> undefine
//                                            val2 -> undefine
//                                            total -> undefine
// execution phase for new execution context: -> val1 <- 10
//                                               val2 <- 20
//                                               total <- 30
// and in return total return in global execution context and new execution context is deleted



// same for result2 created new execution context and perform memory phase and execution phase again

//? call stack  -> to view call stack go to > browser > inspect > sources > save file > write code > run code > check call stack
// The call stack in JavaScript is a mechanism that keeps track of function calls in your code. It follows the Last-In-First-Out (LIFO) principle. When a function is called, it's added to the stack. When the function finishes, it's removed from the stack¹.

// Here's a simple example:

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);


// When "average(10, 20)" is called, the JavaScript engine creates a function execution context for "average()" 
// and pushes it on top of the call stack. Inside "average()", "add()" is called, creating another function 
// execution context for "add()", which is pushed on top of the call stack. When "add()" finishes, 
// it's popped off the stack, and execution returns to "average()". When "average()" finishes, it's popped off the stack, 
// and the script stops when the call stack is empty.



// *****************************************************************************************




// Sure, let's break down how JavaScript works using your code as an example.


let a = 10;
let b = 20;

function addNum(a, b) {
    let c = a + b;
    return c;    
}

let result = addNum();
let result3 = addNum(a, b);
let result4 = addNum(5, 2);


// **1. Global Execution Context:**
// When the JavaScript engine runs your code, it first creates a **global execution context**. This is the environment in which your code is executed. The global execution context has two phases: the creation phase and the execution phase.

// - **Creation Phase:** In this phase, the JavaScript engine scans the entire code and sets up memory space for variables and functions. This is known as **hoisting**. In your code, "a", "b", "addNum", "result", "result1", and "result2" are all hoisted. However, only the function "addNum" is fully defined in memory at this point. The variables "a", "b", "result", "result1", and "result2" are initialized with a value of "undefined".

// - **Execution Phase:** In this phase, the JavaScript engine runs your code line by line and assigns the real values to the variables. In your code, "a" is assigned "10", "b" is assigned "20", and "addNum" is assigned a function.

// **2. Function Execution Context and Call Stack:**
// When a function is invoked, a new execution context is created for that function. This is pushed onto the **call stack**. The call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

// - When "addNum(a, b)" is called, a new execution context is created for "addNum". In this context, "a" and "b" are set to the values passed in, and "c" is "undefined". Then "c" is assigned the value of "a + b", and this value is returned.

// - When "addNum()" is called without arguments, "a" and "b" are "undefined", so "c" becomes "NaN" (Not a Number), and "NaN" is returned.

// **3. The "this" keyword:**
// In JavaScript, "this" is a special keyword that's set when a function is called, and its value is determined by how the function is invoked. In your code, "this" isn't used, but if it were inside "addNum", it would refer to the global object ("window" in a browser, "global" in Node.js) because "addNum" is called as a regular function. If "addNum" were a method on an object, "this" would refer to that object.

// **4. Memory Allocation:**
// JavaScript uses a **garbage collector** to automatically manage memory. When a variable or function is no longer reachable (i.e., there are no references to it), the garbage collector will free up the memory space it occupied.
