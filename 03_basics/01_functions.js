
function sayMyName() {
    console.log("Z");
    console.log("O");
    console.log("A");
    console.log("I");
    console.log("N");
    console.log("R");
}



// sayMyName     // reference
// sayMyName()   // execution

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumber(5, 7);


function addTwoNumber(number1, number2) {
    let result = number1 + number2;
    return result;
    console.log("Zain");   // anything after return cant print
}

// Method 2

function addTwoNumber(number1, number2) {
    return number1 + number2;
}

addTwoNumber(5, 7);


const result =addTwoNumber(3, 5) // without returning we cant save value to variable

// console.log("result is ---> ", result);


function loginUserMessage(username) {
    return `${username} just logged in`
}

// loginUserMessage("Zain")  
// console.log(loginUserMessage());
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Zain"));


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

function loginUserMessage(username = "Zain") {   // this is how we give default values
    if (!username) {
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

// Situation in which we do not know how many arguments are coming and how many parameters are required by the function

function calculateCartPrice(...num1) {   //  ... rest operator also called spread operator | depending upon there use cases
    return num1
}
console.log(calculateCartPrice(5, 7, 9, 10, 15, 20))


function calculateCartPrice(val1, val2, val3, ...num1) {   //  ... called rest operator because contain rest of the values
    return num1
}
console.log(calculateCartPrice(5, 7, 9, 10, 15, 20))



const user = {
    username: "Zain",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username}  and the price of product is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    username: "Zain",
    price: 199
});

const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400]));




