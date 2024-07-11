const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);

// after opening the scope
// const newNums = myNums.map( (num) => {num + 10})
// console.log(newNums); // // undefined as we have to return for opening scope

// const newNums = myNums.map( (num) => {return num + 10})
// console.log(newNums);

// can be done with forEach too

// Chaining method or process-----

// const newNums = myNums.map().map() // // we can use map two times and can add filter after map too, called chaining- using 2-3 methoda ath the same time

// const newNums = myNums
//     .map( (num) => num * 10 ) // // in first iteration or when first map got applied, * 10: 10, 20, 30, 40, ...
//     .map( (num) => num + 1)  // // the second will follow the result of first: 11, 21, 31, 41, ...

// // can be written as:
// // const newNums = myNums.map( (nums) => num * 10 ).map( (num) => num + 1)
// console.log(newNums);

const newNums = myNums
    .map( (num) => num * 10 ) 
    .map( (num) => num + 1 ) // cnditions get returned in map but we have to return values explicitly or performing operations on values
    .filter( (num) => num >= 40) // filter has true and false wala game
console.log(newNums);














