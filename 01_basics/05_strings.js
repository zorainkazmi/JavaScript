const myname = "Zorain"   // create string primitive  =>  immutable
const repoCount = 50

// console.log(myname + repoCount + "Value");   // don't use this formate, not recommended

// String interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // recommended

const gameName = new String("among-us-com")  // create string object  =>  mutable
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-7, 4)
// console.log(anotherString);

const newStringOne = "     Zain    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://Zee.com/zee%20foundation"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('zee'));
// console.log(url.split('/'))

















// __________________________________________________________________________________________________________________

// String primitive VS String object

// const name1 = "zain"; // string primitive
// const name2 = new String("zain"); // string object

// name1.age = 25; // this has no effect, name1 is immutable
// name2.age = 25; // this works, name2 is mutable

// console.log(name1.age); // undefined
// console.log(name2.age); // 25
// ****************************************

// const name1 = "zain"; // string primitive
// const name2 = new String("zain"); // string object

// console.log(name1 == name2); // true, both operands are converted to string primitives
// console.log(name1 === name2); // false, name1 is a string primitive and name2 is a string object
// ***********************************************

// const name1 = "zain"; // string primitive
// const name2 = new String("zain"); // string object

// console.log(typeof name1); // "string"
// console.log(typeof name2); // "object"

// console.log(name1 instanceof String); // false
// console.log(name2 instanceof String); // true

// console.log(Object.prototype.toString.call(name1)); // "[object String]"
// console.log(Object.prototype.toString.call(name2)); // "[object String]"

// __________________________________________________________________________________________________________________





// __________________________________________________________________________________________________________________

// Template literal VS String literal VS string interpolation

// A template literal is enclosed by backticks (`) and can span multiple lines
// let templateLiteral = `This is a
// template literal`;

// A string interpolation is done by using $ {expression} inside a template literal
// let name = "Alice";
// let age = 25;
// let stringInterpolation = `Hello, my name is $ {name} and I am $ {age} years old`;

// A string literal is enclosed by single ('') or double ("") quotes and represents a string value
// let stringLiteral = "This is a string literal";
// __________________________________________________________________________________________________________________