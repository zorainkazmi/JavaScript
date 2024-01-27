// array
// () => parenthesis
// [] => bracket
// {} => braces


const myArr = [0, 1, 2, 3, 4, 5]   // 0 is element 1 is element true is also element
// console.log(myArr);                     // prints the whole array to console
// console.log(myArr[0]);                   // prints the first element of the array

// array-copy operation create shallow copies(=>reference) rather than deep copies(=>copy of original)

const heros = ["spider-man", "iron-man", "dead-pool"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2);

// Array methods

myArr.push(6)   // add 6 in the end of array
myArr.push(7)   // add 7 in the end of array
myArr.pop()    // remove the last value from array

myArr.unshift(9)  // insert value at start
myArr.shift()  // remove initial value from list
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))     // gives us the position of that number
// console.log(myArr.indexOf(9))   //if value doesn't exist then it will return -1 

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);                // join all elements with no space between them

// slice, splice

console.log("A", myArr);   // original array

const newArr2 = myArr.slice(1, 3)
console.log("B", myArr);
console.log(newArr2);

const newArr3 = myArr.splice(1, 3)   //manipulate original array 
console.log("C", myArr);
console.log(newArr3);




