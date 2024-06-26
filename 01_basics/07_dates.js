// Dates

let myDate = new Date()
console.log(myDate); // not readable
console.log(myDate.toString); // converted into Strung
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());
console.log(myDate.getFullYear());

console.log(typeof myDate); // Date is an Object in JS

let myCreateDate = new Date(2023, 0, 23) // for new specific date
// 0 is a key value here: January, 1: February, etc.
console.log(myCreateDate); 
console.log(myCreateDate.toDateString());

let myMadeDate = new Date(2023, 3, 23, 5, 6)
console.log(myMadeDate.toLocaleString());
 
let myNewDate = new Date("2023-03-21") // YY-MM-DD // can be DD-MM-YY
console.log(myNewDate.toDateString());

let myTimeStamp = Date.now() 
// let myTimeStamp = Date.now() - myCreateDate
console.log(myTimeStamp); // 1719397100313 
console.log(myNewDate.getTime()); // 1679356800000 // for comparing dates

console.log(Date.now()); // 1719397258255
console.log(Math.floor(Date.now()/1000)); // 1719397258255 
// '/1000' is to convert into seconds and 'Math.floor' or 'Math.round' is to avoid decimal values

console.log(Date.parse("2023-03-21")); // 1679356800000
console.log(Date.parse()); // NaN

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getMonth() + 1);
// getFullYear, Month, date, Day, Hours, Minutes, Seconds, Milliseconds, UTCFullYear, UTCMonth, UTCDate, UTCDay, UTCHours, UTCMinutes, UTCSeconds, UTCMilliseconds, TimezoneOffset

// newDate.toLocaleString('default', {
//     weekday: "long",
//     year: '2-digit',
//     month: 'numeric',
//     day: "numeric",
//     hour: "2-digit",
//     minute: "numeric",
// })
// method: toLocaleString to format a date (newDate)
// '{weekday: "long"}' specifies that you want the full name of the weekday.(can be long, narrow, short) 

// OR

let options = {
    weekday: "long",
    year: '2-digit',
    month: 'numeric',
    day: "numeric",
    hour: "2-digit",
    minute: "numeric"
};

let formattedDate = newDate.toLocaleString('default', options);
console.log(formattedDate);