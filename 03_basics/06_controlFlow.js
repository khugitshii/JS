// Control flow or Logic Control
// Control flow is the order in which the computer executes statements in a script.
// Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.


// if statements............

if (true){
    // code block to be executed if condition is true
}
if (false){
    // the code or scope will not be executed if condition is false
}

const isUserLoggedIn = true
const temperature = 41
// // conditions: <, >, <=, >=, ==(double equal, checking if equal), ===(strict equal, checking the datatype too, if equal or not), !=, !==
// if (isUserLoggedIn) {
//     console.log("executed");
// }


// if (temperature < 50) {
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");


// if (temperature === 41) {
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");


if (temperature === 41) {
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
console.log("Execute");

// if else statements............

// const score = 200

// if (score > 100) {
//     const power = "fly" // // const and let is used and var is not used as the scope is completely global for var (should not be or it will not be safe) and fly will be accessed outsise too
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) {   // // scope
//     console.log("You have sufficient balance");
// }

// if (balance > 500) console.log("test");   // // implicit scope
// console.log("test2"); // // but not looking nice

if (balance > 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {  // also check for 2 == 3
    console.log("Allowed to buy, users the courses");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User is logged in");
}


















