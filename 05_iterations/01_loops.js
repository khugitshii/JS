// for loops

// syntax:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element); // 0 to 9
} 

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element); // // 0 to 10
// }

// for (let i= 6; i <= 10;  i++) {
//     const element = i;
//     console.log(element); // // 6 to 10
// }

// for (let i= 6; i <= 10;  i++) {
//     const element = i;
//     console.log(element); // // 6 to 10
// }

for (let i= 6; i <= 10;  i++) {
    const element = i;
    if (element ==  5) {
        // console.log("5 is the best number");
    }
    // console.log(element); 
}

for (let i= 0; i <= 10;  i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);       
    }
}

for (let i= 0; i <= 10;  i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);       
    }
}

let myArray = ["Flash", "Batman", "Superman"];   
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    // console.log(element);    
}
 
// break and continue keywords

// break stops statement execution and goes to the first statement after the loop.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`); 
}

// continue stops statement execution and re-evaluates condition .
// continue says i will skip the condition for one time but will not get out of loop.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`); 
}













