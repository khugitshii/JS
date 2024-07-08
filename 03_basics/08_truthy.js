const userEmail = "user@example"

if (userEmail) {
    console.log("Got user email: " + userEmail);
} else {
    console.log("No user email");
}

// const userEmail = " "  // Got user email:

// if (userEmail) {
//     console.log("Got user email: " + userEmail);
// } else {
//     console.log("No user email");
// }
// // Got user email:

// const userEmail = [ ]  

// if (userEmail) {
//     console.log("Got user email: " + userEmail);
// } else {
//     console.log("No user email");
// }
// // Got user email:


// Falsy Values: false, 0, -0, BigInt (0n), " ", null, Undefined, NaN
// Truthy Values: "0", 'false', " ", [ ], { }, function () {}, 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }  

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Operators- Assignment operators - Comparison operators, Arithmetic operators, Bitwise operators, Logical operators, BigInt operators, String operators, Conditional (ternary) operator, Comma operator, Unary operators, Relational operators

// Logical Operators
// Logical AND (&&), Logical OR (||), Nullish coalescing operator (??), and  Logical NOT (!)

// Nullish coalescing operator (??) : null undefined

// let val1; 
// val1 = 5 ?? 10
// console.log(val1); // 5

// let val1; 
// val1 = null ?? 10 // 10 is a flag value here, can be true or false, etc.
// console.log(val1); // 10

// let val1; 
// val1 = undefined ?? 15
// console.log(val1); // 15

// val1 = null ?? 10 ?? 10
// console.log(val1); // 10

val1 = null ?? 21 ?? 10
console.log(val1); // 21

let a = null;
let b = 1;
console.log(a??b); // 1


// Terniary Operator
// syntax: condition ? true : false;

const iceTeaPrice = 200
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more than 80");;




