// function definition and syntax

function sayMyName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

sayMyName() 
// referece: sayMyName and execution: ()

// function addTwoNumbers(number1, number2){
// // parametres
//     console.log(number1 + number2);
// }

// // NaN, so we give Argument (when calling functions)

// addTwoNumbers(5, 10)
// addTwoNumbers(5, "10")
// addTwoNumbers(5, "a")
// addTwoNumbers(5, null)

// const result = addTwoNumbers(5, 10); 
// // stored in variable
// console.log("Result:", result);
// Undefined beacuse console is for printiing a simple console and doesn't mean that it's returning value of the function and return is a concept 


// 1st method:
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;
//     console.log("Khushi") // // unreachable code
//     // nothing gets printed after return
// }

// const result = addTwoNumbers(5, 10)
// console.log("Result:", result);


// // 2nd method:
// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }

// const result = addTwoNumbers(5, 10)
// console.log("Result:", result);


// 3rd method:
function loginUserMessage(username) {
    return `$(username) just logged in`
}

// console.log(loginUserMessage("Khushi") ) // Khushi

console.log(loginUserMessage( ) ) 
// Undefined, so we check it by adding 'if' 

function loginUserMessage(username) {
    if(username == undefined){        // or if(!username)
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

console.log(loginUserMessage( ) ) 

// we can give Default values too-

function loginUserMessage(username = "Singham") {
    // we gave value: Singham, username will never be undefined. So, if block will not be implemented 
    if(username == undefined){      
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Khushi")) 
// and if we print the value like this, "Singham just logged in" will get overwritted with name Khushi

// Ecommerce Website----------

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2)); // [2]

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 5000, 200000));
// we used Rest operator or Spread operaator in this(...name)
// we got Array: [ 200, 400, 500 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 5000, 200000));
// 200 is in value 1 and 400 is in value 2 and the rest got into Array
// we got Array: [ 5000, 200000 ]

// how an Object is passed and used in a Funtion--------------------

// Object
const user = {
    username: 'Khushi',
    price: 299
}

// function
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// calling function
handleObject(user);

// Or-
handleObject({
    username: "Samay",
    price: 999
})

const myNewArray = [200, 400, 101, 699]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// or-
console.log(returnSecondValue([200, 600, 500, 1000]));
