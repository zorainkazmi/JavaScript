const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = myNumber.map( (item) => item  + 10 )
console.log(newNumber); // [11, 12, 13,...

//  chaining

const newNumber2 = myNumber
                    .map( (item) => item  + 10 )
                    .map( (item) => item * 2 )
                    .filter( (item) => item >= 30 )
console.log(newNumber2); 


