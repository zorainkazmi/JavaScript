const user = {
    username: "Zain",
    price: 999,

    welcomeMessage:function () {
        console.log(`Welcome ${this.username} to website! `);  // this. referred to current context 
        console.log(this);
        // console.log(this.price);
    }
}

// user.welcomeMessage(); 
// user.username = 'Zorain';
// user.welcomeMessage(); 

// console.log(this)


// In browser the global object is window


function chai() {
    let username = "Zain";
    // console.log(this);
    // console.log(this.username);   // undefined because 'username' is not a property of 'this'
}
chai()

// const chai = function () {
//     let username = "Zain";
//     console.log(this);
//     console.log(this.username);   // undefined because 'username' is not a property of 'this'
// }
// chai()


const chai = () => {
    let username = "Zain";
    console.log(this);
    console.log(this.username);   // undefined because 'username' is not a property of 'this'
    }

// chai()
// explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));

// implicit return
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4));

const addTwo3 = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4));

// how to return object
const addTwo4 = (num1, num2) => ({username: "Zain"})

