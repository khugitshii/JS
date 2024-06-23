let score = 33; // number

let age = "33"; // string

// const {score} = req.body 
// no guarantee about datatype, so we follow these:

console.log(typeof score);
console.log(typeof (score));
console.log(typeof (age));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let valueOfNumber = String(age);
// console.log(typeof valueOfNumber);

// console.log("Khushi");

// let score = "33" => 33
// let score = "33abc" => NaN (Not a Number)
// let score = null => 0
// let score = undefined => NaN (Not a Number)
// let score = true => 1 (o if False)
// let score = "Khushi" => NaN (Not a Number)

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// let isLoggedIn = 0 => False
// let isLoggedIn = "" => False
// let isLoggedIn = "Khushi" => True

let someNumber = 33
let stringNumber = String(someNumber);
console.log(someNumber);
console.log(typeof stringNumber);