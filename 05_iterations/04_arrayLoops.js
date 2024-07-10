const myObject = {
    js: 'javasript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
}

// to get object
for (const key in myObject) {
    // console.log(myObject[key]);
} // myObject is not iterable

// so, 
for (const key in myObject) {
    // console.log(`${key} shortcut is for $`);
}


// for in lops-----

const programming = ["js", "css", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
} // we get keys

for (const key in programming) {
    // console.log(programming[key]);
}

// maps-----

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('FR', 'France')

for (const key in map) {
    // console.log(key);
} // we print nothing as map is not iteratable and there are ways to iterate it.





