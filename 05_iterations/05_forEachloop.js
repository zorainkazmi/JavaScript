const coding = ["js", "ruby", "python", "java", "cpp"]


coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach( function ([key, value]) {
    console.log(key, value);
} )

coding.forEach( (item) => {
    console.log(item);
} )

console.log("first")

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

coding.forEach( item => console.log(item) )

// coding.forEach( (item, index, arr) => {
//     console.log(item,index, arr); 
// } )

// const myCoding  = [
//     {
//         languageName: 'javascript',
//         languageFileName: 'js',
//     },
//     {
//         languageName: 'ruby',
//         languageFileName: 'rb',
//     },
//     {
//         languageName: 'python',
//         languageFileName: 'py',
//     }
// ]

// myCoding.forEach( item => {
    // console.log(item.languageName)
// });

// ****************************************************************************************

// more understanding

// function code(value1) {    // how normal function works
//     console.log(value1)    
// }
// code(10,20,30)


// let array = ['a', 'b', 'c', 'd', 'e'];
// array.forEach(function(element, index, arr) {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${arr}`);
// });