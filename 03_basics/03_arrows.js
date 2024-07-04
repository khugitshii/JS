// Arrow Functions and Features(This keyword)----------------------------------------
// This keyword tells about the current context

// const user = {
//     username: "Khushi",
//     price: 1999,
//     welcomeMessage: function() {
//         console.log(`${this.username} , Welcome to the website`);
//         // console.log(this);
//     }
// }
// // 'this' keyword makes the current context
// user.welcomeMessage()
// user.username = "Arya"
// user.welcomeMessage()

// Khushi , Welcome to the website
// Arya , Welcome to the website


// const user = {
//     username: "Khushi",
//     price: 1999,
//     welcomeMessage: function() {
//         console.log(`${this.username} , Welcome to the website`);
//         // console.log(this);
//     }
// }
// console.log(this); // // {}


const user = {
    username: "Khushi",
    price: 1999,
    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to the website`);
        console.log(this);
    }
}

// function chai(){
//     console.log(this);
// }
// chai()

//   Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: value],
//   crypto: [Getter]
// }

// so, 'this' has something which we can access

// function chai(){
//     let username = "Khushi"
//     console.log(this);
// }
// chai() // almost same got printed

// const chai = function() {
//     let username = "Khushi"
//     console.log(this.username);
// }
// chai() // // Undefined

// const chai = () =>  {
//     let username = "Khushi"
//     console.log(this.username);
// }
// chai() // // Undefined
// This is called Arrow Function

const chai = () =>  {
    let username = "Khushi"
    console.log(this);
}
chai() // // {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(300, 400));
// This a basic Arrow Funcrion

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(300, 400));
// This is an Impilicit Arrow Function(remove braces and return & make it one line statement )
// Called an Explicit Arrow Function when we use 'return'

// or------

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(300, 400));

// or------

// const addTwo = (num1, num2) => {username: "Khushi"}
// console.log(addTwo(300, 400)); // // Undefined

const addTwo = (num1, num2) => ({username: "Khushi"})
console.log(addTwo(300, 400)); // // { username: 'Khushi' }

// const myArray = [21, 50, 34, 77, 81]
// myArray.forEach(function () {}) // // correct syntax
// myArray.forEach(() => {}) // // this is also a  correct syntax
// myArray.forEach(() => ()) // // this is also a correct syntax

