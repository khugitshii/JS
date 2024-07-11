// for each loops and filter map 

const coding = ["js", "css", "java", "python", "cpp"]

coding.forEach( (item) => {
    console.log(item);
})

// now storing it in a variable- values

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values); // // undefined


// so, we will have to tell it to return the item to print it.

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values); // // again undefined

// Hence, 'for each' does't return value.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num > 4 ) // // this returns the value
// so, 

// const newNums = myNums.filter ( (num) => num > 4 )
// console.log(newNums);  // // [ 5, 6, 7, 8, 9, 10 ]

// OR-

// const newNums = myNums.filter( (num) => {
    // num > 4
// } )
// console.log(newNums); // // []: empty array


// const newNums = myNums.filter( (num) => {
//     // // num > 4 was wrong, we have to write return keyword as we have opened thea scope
//     return num > 4
// } )
// console.log(newNums);


// for each-----

const newNums = []

myNums.forEach((num ) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);

// Example- 

const books = [
    { title: 'Book One', genre: 'Fiction', publishDate: 1990, edition: 2003
    },
    { title: 'Book Two', genre: 'Erotica', publishDate: 2006, edition: 2005
    },
    { title: 'Book Three', genre: 'Thriller', publishDate: 1970, edition: 2021
    },
    { title: 'Book Four', genre: 'Sci-fi', publishDate: 1888, edition: 2003
    },
    { title: 'Book Five', genre: 'Adventure', publishDate: 2002, edition: 2020
    },
    { title: 'Book Six', genre: 'Mystery', publishDate: 1992, edition: 2000
    },
    { title: 'Book Seven', genre: 'Mystery', publishDate: 1995, edition: 2003
    },
    { title: 'Book Eight', genre: 'Comedy', publishDate: 2007, edition: 2023
    }
]


let userBooks = books.filter( (bk) => bk.genre === 'Mystery')

// const userBooks = books.filter( (bk) => bk.genre === 'Mystery')
// const userBooks = books.filter( (bk) => bk.genre === 'Mystery' && bk.edition === 2003)
// userBooks = books.filter( (bk) => {bk.publishDate >= 2000}) // // [] as we haven't used return after opening scope
// userBooks = books.filter( (bk) => { return bk.publishDate >= 2000})
// for both

userBooks = books.filter( (bk) => { 
    return bk.publishDate >= 2000 && bk.genre === 'Comedy'
})

console.log(userBooks);










