// 2 methods for declaring objects- like Literal and like Constructor

// singleton: object formed from Constructor
// in other objects, multiple instances are formed
// when we declare like Literals, Singletons are not forme and Constructor always forms a singleton

// Object Literals

// 'Object.create' is a Constructor method to create object
const mySymbol = Symbol("key1");
const mySymbol1 = Symbol("key2");

const jsUser = {
    name: "Khushi",
    "full name": "Khushi Chauhan",
    age: 18, 
    location: "Jaipur",
    email: "khushi@gmail.com",
    mySymbol: "mykey1", // symbol used as a key
    [mySymbol1]: "mykey2", // [] to refer symbol and it tells that its a symbol key
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 
// we can define key and object both in Object
// But in Array-  myArray = ["k", "1"]
//                myArray[1]
// we can access any property(0, 1, etc.) of myArray and we cannot define keys

console.log(jsUser.email);
console.log(jsUser["email"]); // we took email as a string to get output
console.log(jsUser["full name"]);
console.log(jsUser.mySymbol);
console.log(typeof jsUser.mySymbol);
console.log(jsUser["mySymbol"]);
console.log(jsUser["mySymbol1"]);

jsUser.email = "khushi@chatgpt.com" // change email
// Object.freeze(jsUser) // freeze or lock the change
jsUser.email = "khushi@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello1! JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello1! JS User, ${this.name}`); // string interpolation
    // "this" to know properties or know the Object(jsUser) we are referencing
}

console.log(jsUser.greeting); // we referred to greeting method
console.log(jsUser.greeting()); // still not a function
console.log(jsUser.greetingTwo()); 

// we access values with . in Js but there are special cases where we have to use [ ] and there's no other option