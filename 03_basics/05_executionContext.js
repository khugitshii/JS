// Code execution& call stack execution(how funtions will get into memory, how will they go and how will they come back)

// JavaScript Execution context----------
// two kinds:

// 1) Global Execution Context (GEC) ( {} ): whenever js engine receives a script file, it creates a default execution context called GEC 
// (for every JS file, there can only be one GEC) (GEC is referred or put into a variable- 'this')
// (browser's GEC, node js env.'s GEC, etc., all have diff GEC)

// 2) Function Execution Context (FEC): whenever function is called, js creates a different type of execution context called FEC within GEC to evaluate and execute the code within the function
// (since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.)

// 3) Eval Execution Context (EEC): a property of global object

// How are execution context created? 
// in 2 phases- 

// let val1 = 10
// let val2 = 5
// function addNum (num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)

// Phase 1: code runs through Global execution/ Global environment and located in 'this'
// Phase 2: Creation/Memory Phase: all variables are collected and stored. ( val1 -> undefined, val2 -> undefined, addNum -> function definition, result1 -> undefined, result2 -> undefined )
// Phase 3: Execution Phase: (val1 <- 10, val2 <- 5, addNum - definitioon already holded, nothing to execute, and  result1 -> undefined, result2 -> undefined )
//  but in next line: addNum makes a diff execution context: making new variable env. and an execution thread called New Execution Context, now: global is defined and the two phases will occur again
//  memory phase: val1 -> undefined, val2 -> undefined, and total -> undefined 
// execution phase: num1 -> 10, num2 -> 5, and total -> 15 and the value returns to GEC, result1 -> 15, result2 -> 15
// again, new var. env. and thread, both new phases, qnd same steps and repetition


// 1) Creation Phase/ Memory Creation Phasecontains memory allocation phase

//  Creation Phase Of The Variable Object (VO)--
// VO: object-like container created within an Execution Context.
// in GEC, for each variable declared with the 'var' keyword, a property is added to VO
// FEC does not construct a VO,  it generates an array-like object called the 'argument' object
// this process of storing variables & function declaration in memory prior to execution of the code: Hoisting. 

//  Creation Phase of the Scope Chain-- 
// after creation of VO, comes creation of Scope Chain as next stage

//  Creation Phaseof Setting The Value of The "this" Keyword--
// the next and final stage after scoping in the creation phase 
// (Functions and variables in the GEC get attached as methods and properties to the window object)
// (In the case of the FEC, it doesn't create the this object. Rather, it get's access to that of the environment it is defined in)

// 2) Execution Phase:
// actual code execution begins. VO contained variables with the values of undefined but the code returns error and values are undefined. 
// JS engine reads the code in current Execution Context once more, then updates VO with actual values of these variables. Code is parsed by a parser, gets transpired to executable byte code, and finally gets executed.

 
// Call Stack: (Lifo Concept- Last In and First Out )
// 
// 

function one(){
    console.log("one");
}

function two(){
    console.log("two");
}

function three(){
    console.log("three");
}

one()
two()
three()



function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
}

one()
two()
three()




