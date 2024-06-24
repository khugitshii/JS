// # Primitive DataTpes
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, and BigInt

// JS is Dynamically-typed or Statically-typed language? 
// JS uses dynamic typing where the interpreter assigns variables a type at runtime based on the variable's value at the time.
// And we don't need to define the language (or type) and type checking is done at runtime rather than compile time.

// link: https://tc39.es/ecma262/#sec-typeof-operator

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // value is null and type is Object
let userEmail;

console.log(scoreValue);
console.log(typeof scoreValue);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 10897656343097n
console.log(typeof bigNumber);

// # Reference or Non-Primitive DataTypes
// Arrays, Objects, and Functions

const heros = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name: "Khushi",
    age: 22,
}
// Object is in Curly Braces stored in variable named, myObj
console.log(heros);
console.log(typeof heros);

const myFunction = function(){
    console.log("Hello World!");
}
// Calling the function
myFunction();

console.log(myFunction);
// Prints the function object: [Function: myFunction]

console.log(typeof myFunction); 
// Prints the type of the function: "function"
// The type of myFunction, which is "function" is called Object Function.

// Function can be treated as Variable in JS

// (Master Objects and browser events for JavaScript)