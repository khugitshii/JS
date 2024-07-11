// for each loops-------

const coding = ["js", "css", "ruby", "python", "cpp"]

coding.forEach( function (item) {
    // console.log(item);
})

// using arrow functions-----

coding.forEach( (val) => {
    // console.log(val);
} )

// other way- parameter: printMe

function printMe(item){
    // console.log(item);
}

coding.forEach( printMe)

// more parameters with arrow function-

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});



















