const marvel_heros = ["Ironman", "Thor", "Hulk"]
const dc_heros = ["Superman", "Batman", "Flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); // array in array, took array as aan data
// here 0th element: Ironman, 1st: Thor, 2nd: Hulk, and 3rd element is ["Superman", "Batman", "Flash"]
console.log(marvel_heros[3] [1]); 

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // elements merged

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // elements spread out

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(2)
const one_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(one_another_array);

console.log(Array.isArray("Khushi"))
console.log(Array.from("Khushi"))
console.log(Array.from({name: "Khushi"})) // empty array: interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

// is, from, of are imp. arrrays






