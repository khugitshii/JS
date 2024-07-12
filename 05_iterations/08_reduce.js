// reduce (especially used in shoppings and carts process)

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial); // 10


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval 
// }, 0) 

// OR-

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: "2999"
    },
    {
        itemName: "mobile development course",
        price: "2999"
    },
    {
        itemName: "frontend development course",
        price: "3999"
    },
    {
        itemName: "ui/ux course",
        price: "3199"
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + Number(item.price), 0);

console.log(priceToPay);












