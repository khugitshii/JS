const score = 400
console.log(score);

const balance = new Number(101)
console.log(balance);
//new object defined in number type, so, output: [Number: 101]

// Prototype:Number properties- Number(), toExponential(), toFixed, toLocaleString(), toPrecision(), toString(), valoueOf()

console.log(balance.toString());
console.log(balance.toString().length);
// concat, length, etc. properties can be added

console.log(balance.toFixed(2));    
console.log(balance.toFixed(5));    

const otherNumber = 121.10811 //roundoff
console.log(otherNumber.toPrecision(3));

const anotherNumber = 1123.8966
console.log(anotherNumber.toPrecision(3)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString);
console.log(hundreds.toLocaleString('en-IN'));

// Number Static Properties: Number.EPSILON, Number.MAX_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_VALUE, Number.MIN_SAFE_INTEGER, Number.NaN, Number.NEGATIVE INFINITY, Number.POSITIVE_INFINITY
// Other than Static properties, there are- Static Methods, Instance Properties, and Instance Methods

// ------------------Maths------------------

console.log(Math); // Math is an Object having properties defined

// Math Static Properties: Math.E, Math.LN10, Math.LN2, Math.LOG10E, Math.LOG2E, Math.PI, Math.SQRT1_2, Math.SQRT2
// Static Methods: Math.abs(), aco, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos, cosh, exp, expm1, floor, fruound, hypot, imul, log, log10, l0g1p, log2, max, min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc\

console.log(Math.abs(4)); // 4
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.round(-4.8)); // -5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.2)); // 4
console.log(Math.sqrt(36)); // 6
console.log(Math.pow(2, 8)); // 256
console.log(Math.max(4.9, 7, 21, 34.5)); // 34.5
console.log(Math.min(4.9, 7, 21, 34.5)); // 4.9

console.log(Math.random()); // values between 0-1
console.log(Math.random()*10);
console.log(Math.random()*10 + 1); // Math.random will give value 0, so we will add 1 to avoid it
console.log((Math.random()*10) + 1); 


const min = 10
const max = 20

console.log(Math.random()); 
console.log(Math.random()); 
console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Formula
// Case: we have to define min and max too, so, instead of '*10', we used 'max-min' to get range, and added 1 to avoid 0, then added 'min' to get min value.




