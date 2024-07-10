// for of loop-------

// Array with Strings: ["", "", ""]
// Array with Objects: [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello! "
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps----- (Map objects are collection of key-value pairs{for... of}; each key-value is inserted into map by set() method.)

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('FR', 'France')

console.log(map);

// for of loop in Map
for (const key of map){
    console.log(key); // prints int he form of array
}

// so, for destructuring of array
for (const [key, value] of map){
    // console.log(key, ':-', value); // to print key and value separately (we can only print key alone or value alone too)
}

// const myObject = {
//     'game1': 'Hanuman',
//     'game2': 'Spiderman',
//     'game3': 'Perman',
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } // // myObject is not iterable


const myObject = {
    game1: 'Hanuman',
    game2: 'Spiderman',
    game3: 'Perman',
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
} // myObject is not iterable









