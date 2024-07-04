// Scope starts with: let, var and const
// {} is an Object Declaration 
// {} with functions or if else is Scope of Function or Scope of if else
// kinds of Scope- Global, Module, Funtion, and Block

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a, b, c);

if (true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a); // // a is not defined
// console.log(b); // // b is not defined
console.log(c); // 30


var c = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(c); // 30

var a = 300
if (true){
    let a = 10
    const b = 20
}
console.log(a); // 300

var a = 300
if (true){
    let a = 10
    const b = 20
    console.log("INNER: ", a); // 10
}
console.log("OUTER: ", a); // 300


var a = 300;

if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);
}

const array = [1, 2, 3, 4, 5]; // Example array for demonstration

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("ELEMENT: ", element);
}

console.log("OUTER: ", a);


// They were Block Scope or Compound Statemet and Global Scope
// Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.
// Block scope is created within specific code blocks, such as conditional statements (if, else, switch) and loops (for, while).

// Question: 
// The Global scope we check or see in Console and the one we see here in code environment through node are different.
// In a web browser, the global object is window, and global variables declared with var become properties of window. 
//  In Node.js, the global object is global, but variables declared with var, let, or const are local to the module unless explicitly attached to global. 
// Each file in Node.js is treated as a separate module with its own scope, while in a browser, the top-level scope is shared.

// Nested Scopes, Types of Scopes, Closures, DOM(Document Object Module)

// Nested Scopes or Functions(Child funtions can accres the Parent Function Variables)--------------------

function one(){
    const username = "Khushi"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website); // // the scope of website ended in fucntion two, we can;t access. The next line: two() did not execute

    two() // Khushi // if two() is commented out nothing will be printed
}

one()

if (true) {
    const username = "Khushi"
    if (username === "Khushi") {
        
        const website = " YouTube"
        console.log(username + website);
    }
    // console.log(website); // // the scope of website ended in if
}

// console.log(username); //// the scope of username is not here, will not print


// -------------------------------interesting concept------------------------------------

function addOne(num){ // function
    return num + 1
}
addOne(5) // 5 is returned not printed

// const addTwo = function(num){ // // Function but called Expression too
//     return num + 2
// }

// addTwo(5)



console.log(addOne(5));
// can be printed before decalaration too
function addOne(num){
    return num + 1
}

addTwo(5);
// addOne was getting executed and got accessed but addTwo cannot 
// addOne: we did Declaratioon but in addTwo: we declared and hold in a variable
// Hoisting: declaring, holding and execution of a funtion
const addTwo = function(num){
    return num + 2
}

