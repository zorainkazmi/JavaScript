//  for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}
//  first index initialized to 0 then it check condition and if it is true then it will execute the code inside block, here in this case it will print numbers from 0 to 9
//  then it will increment 1 in index and check the condition again and if it is true then it will execute the code inside block and so on



for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is best number")
        
    }
    // console.log(element);
}



for (let i = 0; i <= 5; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner loop value: ${j} and inner loop: ${i}`);
        
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


//  break and continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}

