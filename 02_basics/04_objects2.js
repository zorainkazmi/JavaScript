//  singleton

// const instagramUser = new Object()  // singleton object
const instagramUser = {}  // non-singleton object

instagramUser.id = "123abc"
instagramUser.name = "Zain"
instagramUser.isLoggedIn = false

// console.log(instagramUser);

const regularUser = {
    email: "zorainkazmi@gmail.com",
    fullname: {
    //     userfullname: {
    //         firstname: "Zorain",
    //         lastname: "Kazmi"
    //     }
    }
}

// console.log(regularUser.fullname.userfullname?.firstname);  // optional chaining ? it will not crash if we try to access undefined value
// console.log(regularUser.fullname.userfullname.firstname);  // through error if anything is unavailable in object


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj 3 = Object.assign({}, obj1, obj2)     // {} => target obj1,obj2,obj3 is source 


const obj3 = {...obj1, ...obj2}   // spread operator   => glass example
// console.log(obj3);

// value come from database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email   // when we access user[1] its mean object at index 1 in array and its email
// console.log(instagramUser);

// console.log(Object.keys(instagramUser));
// console.log(Object.values(instagramUser));
// console.log(Object.entries(instagramUser));

// console.log(instagramUser.hasOwnProperty('isLoggedIn'));



// object de-structure and JSON API 

const course = {
    courseName: "JS with Zain",
    price: "999",
    courseInstructor: "Zain"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course  // rename the key   
// console.log(courseInstructor);
console.log(instructor);

//  API 

// {
//     "name": "Zain",
//     "coursename": "JS with Zain",
//     "price": "999",
// }

// [
//     {},
//     {},
//     {},
// ]



