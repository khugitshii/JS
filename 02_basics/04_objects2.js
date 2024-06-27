// singleton and constructor

const instaUser = new Object()
console.log(instaUser);

const tinderUser = {}
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Khushi"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "khu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Khushi",
            lastname: "Chauhan",
        }
    }
} 
// nesting
//arrays in array
 console.log(regularUser.fullname); 
// object is getting stored in vaiable- fullname

console.log(regularUser.fullname.userfullname.firstname);  

const obj1 = {1: "a", 2: "b"} // target
const obj2 = {3: "c", 4: "d"} // source
const obj3 = {5: "c", 6: "d"} // source
// const obj3 = { obj1, obj2}
// console.log(obj3);

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)
// {}: is optional parameter and an empty object becomes target and the remaining becomes source


const obj4 = {...obj1, ...obj2} // spread operator to spread all values and combined in object
console.log(obj4);

const users = [
    {
        id: 1,
        email: "khabc@gmail.com",
    },
    {
        id: 1,
        email: "khabc@gmail.com",
    },
    {
        id: 1,
        email: "khabc@gmail.com",
    },
    {
        id: 1,
        email: "khabc@gmail.com",
    }
] 
// array has many objects

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// constructor, hasOwnProperty, isPrototypeOf, valueOf, toString, toLocaleString, propertyIsEnumerable, etc.

// -----------------destructuring-----------------
const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Khushi"
}

// course.courseInstructor

const {courseInstructor}= course
console.log(courseInstructor);

// const {course.courseInstructor: instructor} = course
// console.log(instructor);

// in react: 
// const navbar = ({company}) => {
// }
// navbar(company = "khushii")

// APIs are how we write values from backend (comes in json)
// how do we get values in API? (we get objects form and in array form too)

// Object json- 
// {
//     name: "khushi",
//     coursename: "Java",
//     price: "free",
// }

// tool- JSON Formatter: to understand code or API
[
    {},
    {},
    {},
]







