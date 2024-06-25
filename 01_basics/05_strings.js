// '' or "": both can be used
// String is Object 

const name = "Khushi"
const repoCount = 21

console.log(name + repoCount + "Value");
// outdated and not recommended
// we use vactice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// String interpolation
// we can also add mentod: (`Hello my name is ${name.toLowerCase()} and my repo count is ${repo`

// Other way to declare a String
const gameName = new String('Khushi-abc')
// There's keyword new, and use of objects in JS: String with it's constructor- (' ')
// we get key value pairs here, length, and mamny methods in  prototype
// eg: 0: "k"
//     1: "h"... key 0 has the value k and 1 has h.

console.log(gameName [0]);
console.log(gameName [4]);
console.log(gameName.__proto__);

// functions and methods- toUpperCase, toLowerCase, anchor, bold, at, big, charAt, concat, endsWith, toString, split, small, substr, replce, valueOf, repeat, trimRight, Symbol(Symbol.iterator)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('i')); 

const newString = gameName.substring(0,4)
console.log(newString);
// last value i.e. 4: not included

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// only slice can use negative values, substring will not obey

const newStringOne = "   khushi  "
console.log(newStringOne);
console.log(newStringOne.trim());
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://khushi.com/khushi%21chauhan"
console.log(url.replace('%21', '-'))
console.log(url.includes('rajput'));

console.log(gameName.split('-'));
/// split(separator) and split(separator, limit)

console.log(gameName.repeat(3));

// concat() method: joins two or more strings, does not change the existing strings, and returns a new string.