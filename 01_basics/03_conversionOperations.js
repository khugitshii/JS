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

// ********************* Operations ********************* 

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 raise to the power 2
console.log(2/3);
console.log(2%3); // mudulud/remainder

let str1 = "Khushi"
let str2 = "Rajput"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); //ToPrimitive (Inputs and preferredType)

console.log((3 + 4) * 5 % 3);

console.log(true);
console.log(+true); // true+ is not possible
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // prefix and postfix Operators
console.log(gameCounter);

// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment



