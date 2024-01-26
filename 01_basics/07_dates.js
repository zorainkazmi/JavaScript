// Date

let myDate = new Date()
// let myDate = Date()
// console.log(myDate);  // 2019-11-25T17:38:4
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCDate());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5,3)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01-15-2023")
// console.log(myCreatedDate.tolocaleString());
// console.log(myCreatedDate.toDateString);


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000)   //  issue is we have value in points to resolve we use floor
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.setFullYear(2020));
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

// ` ${newDate.getDate()} and time is `

newDate.toLocaleString("default", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
    weekday: "long"

});



