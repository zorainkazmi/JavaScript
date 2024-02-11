
// const myNumber = [1, 2, 3]

// const myTotal = myNumber.reduce( function (acc, curVal){
//     console.log(`accumulator: ${acc}, current value: ${curVal}`)
//     return acc + curVal;
// }, 0);
// console.log(myTotal);

// const myNumber = [1, 2, 3]
// 	const myTotal = myNumber.reduce( (accumulator, currentValue) => accumulator + currentValue, 1 )
// 	console.log(`The total of ${myNumber} is ${myTotal}.`) // The total of 1, 2, 3 is 7.



// const myNumber = [1, 2, 3]
// const initialValue = 1
// const myTotal = myNumber.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue )
// console.log(`The total of ${myNumber} is ${myTotal}.`) // The total of 1, 2, 3 is 7.



const shoppingCart = [
    {
        itemName: 'py course',
        price: 5999
    },
    {
        itemName: 'js course',
        price: 4999
    },
    {
        itemName: 'java course',
        price: 3999
    },
    {
        itemName: 'c++ course',
        price: 2999
    },
    {
        itemName: 'c# course',
        price: 1999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price  , 0 )

console.log(priceToPay);


// Challenge: Use the reduce method to calculate the average of an array of numbers.

// let numberArray = [5, 7, 9, 4, 2, 1, 6, 8, 3, 0]

// numberArray.sort((a, b) => a - b) // Sorts in ascending order.

// const avg = numberArray.reduce( (total, num) => {
//     return total + num
// }, 0 ) / numberArray.length;

// console.log('The average of '+ numberArray +' is '+avg  + '.') // The average of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] is 4.5 .
// console.log(`The average of ${numberArray} is ${avg}.`); // The average of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] is 4.5.
