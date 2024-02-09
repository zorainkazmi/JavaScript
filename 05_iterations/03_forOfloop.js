//  for of loop  

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}


const greeting = "hello world!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}


// Maps -> unique value + maintain order

const map = new Map()
map.set("PAK", "Pakistan")
map.set("USA", "United States of America")
map.set("Fr", "France")

// console.log(map)

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {   // array destructuring
    // console.log(key, ':-', value);
}

const myGames = {
    "game1": "NFS",
    "game2": "Spiderman"
}
// for (const [key, value] of myGames) {
//     console.log(key, ":-", value);
// }


// ***********************************************************************************************************

// const myObject = {
//     js: "javascript",
//     cpp: "C++",
//     rb: "Ruby"
// }
// for (const key of myObject) {
    // console.log(key)
    // console.log(myObject)
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)
// }


const myArray = ["js", "ruby", "python", "java", "cpp"]
for (const key of myArray) {
    // console.log(key)
    // console.log(myArray)
    // console.log(myArray[key])
    // console.log(key[myArray])
    // console.log(`${key} is index of ${myArray[key]}`)
}





