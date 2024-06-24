console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 === 1);
console.log(2 != 1);
console.log(2 !== 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true, which is not a predictable result

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// we avoid conversions like this (null and undefined)

// === (checks valye strictly and datatype too)

 console.log("2" == 2);
 console.log("2" === 2);