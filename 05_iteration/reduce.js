// // Map : The array (reduce) in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.
// const arr = [1,2,3,4,5];
// let initialValue = 0;
// const ans = arr.reduce((accumulator , currentValue)=>{
//     console.log(`${accumulator+currentValue}`);
//     return accumulator + currentValue;
// },initialValue);
//  console.log(`The final result of the array is :`,ans);


                // Example of shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
 const initialValues = 0;
        // add all the prices of the shopping cart.
const result = shoppingCart.reduce((accumulator , currentValue)=>{
        return accumulator + currentValue.price;
},initialValues);
console.log(result);
