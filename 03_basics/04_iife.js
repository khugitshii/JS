// IIFE: Immediately Invoked Function Expressions
// runs as soon as it is defined. 
// Reasons to use- immediately executes and to avoid polllution from Global Scope(pollution from variables, decalarations, etc.)

// () makes a Block


// function chai(){
//     console.log(`DB Connected`);
// }
// chai()


// (function chai(){
//     console.log(`DB Connected`);
// }) ();


// (function chai(){
//     console.log(`DB Connected`);
// }) ();

// // in the form of Arrow Function
// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )();


// Two IIFE when together... use ';'

// (function chai(){
//     console.log(`DB Connected`);
// }) ();

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )();


// (function chai(){
//     console.log(`DB Connected`);
// }) ();

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )();


(function chai(){
    // named IIFE
    console.log(`DB Connected`);
}) ();

// simple un-named IIFE...like using arrow function
// parameter: name also passed
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Khushi');



