// arrays
// arrays aren't primitives but are instead Array objects

const myArray = [0, 1, 2, 3, 4, 5, true, "khushi"]
// collection of elements in single array- 'myArray'
// elements here can be numbers, strings, mixed. (mix of datatypes)

console.log(myArray[0]); // zero base indexing
// 1st element is at index 0 and 2nd at index 1
// last is at value of array's length property minus 1

// array-copy operations create shallow copies.(All standard buil-in copy operations in js create shallow copies rather than deep copies)
// shallow copy: properties share the same reference
// deep copy: properties do not share the same reference

// Array Methods- concat(), every(), filter(), flat(), indexOf(), reduce(), some(), sort(), spice(), fill(), find(), etc.

// array also gives prototype access
// array also has property '.length'

const myHeros = ["Shaktimaan", "naagraj"]
const myArray2 = new Array(1, 2, 3, 4)

console.log(myHeros.length);
console.log(myArray2[3]);

// array methods- concat(), every(), filter(), flat(), indexOf(), reverse(), some(), sort(), slice(), splice(), 

myArray.push(6)
myArray.push(7)
myArray.pop() // last value removed
myArray.unshift(7)  // remove
myArray.unshift(10) 
myArray.shift() // 1st value removed
myArray.shift() // other first removed
myArray.shift() 
console.log(myArray);

console.log(myArray.includes(9)); // Questionairre methods
console.log(myArray.indexOf(9)); // 9 does not exist, so: -1
console.log(myArray.indexOf(-19)); // -1
console.log(myArray.indexOf(3)); // 3 exists: 2

const newArray = myArray.join(); // elements of array to a string
console.log(myArray);
console.log(newArray);
console.log(typeof newArray); // string

console.log("A", myArray);
const myn1 = myArray.slice(1, 3) 
console.log(myn1); // 1 and 2- 3 not included
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2); // 1, 2, and 3- all included
console.log("C", myArray); 

// Difference btw Slice and Splice:
// Slice():  manipulates original array or adds new items to an array or returns a new array with the extracted elements or  creates a new array with a portion of elements copied from the original array
// Splice(): modifies the original array in place by removing or replacing elements and optionally adding new elements or slices out a piece of an array or mutates the original array itself by removing, replacing or adding elements to it.


