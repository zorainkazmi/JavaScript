var c = 300
let a = 300
if (true) {
    let a = 10   // block scope
    const b = 20  // block scope
    var c = 30  // not recommended due to scope pollution
    // console.log("inner: ", a);   
}


// console.log(a);
// console.log(b);
// console.log(c);



function one() {
    const username = "Zain"

    function two() {
        const website = "youtube"
        console.log(username); // Zain
    }
    // console.log(website);  // error

    two()

}

// one();

if (true) {
    const username = "Zain"
    if (username === "Zain") {
        const website = "youtube"
        // console.log(username + website); 
    }
    // console.log(website);  // error 1
}
// console.log(username);   // error 2





// ******************************** interesting **********************************

// console.log(addOne(5))
function addOne(num) {
    return num + 1
}

// addTwo(5)      //  hoisting execution concept
const addTwo = function (num) {
    return num + 2 
}
