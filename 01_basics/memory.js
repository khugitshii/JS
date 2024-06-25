// Types: Stack Memory(Primitive Datatype) an Heap Memory(Non-Primitive Datatype)

let myYoutubename = "khushichauhandotcom";

let anothername = "khushichauhandotcom";
anothername = "khushiandcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne;
userTwo.email = "khushii@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// when we put values in Stack, we get a copy
// when we put values in Heap, we get a reference: changes or update we do is in original value

// Stack provides static memory allocation, storing static data: store the temporary variables.
// Heap provides dynamic memory allocation, storing dynamic data: by default, all the global variables are stored.