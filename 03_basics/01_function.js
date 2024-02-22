function addTwoNumber(number1, number2){
    return number1+number2;
}
const ans = addTwoNumber(3,2);
console.log(ans);
        // in function parameter we can also pass the default arguments.
function loginUserMessage(username="Akhilesh Thakur"){
    return `${username} you are just logged in`;
}
console.log(loginUserMessage());


// lets suppose we take myntra example in which user can add many carts so here we can't decide how many arguments
function myntraCart(...num){
    return num;
}
console.log(myntraCart(2,3,3,4,4));


                            // Function with objects
const obj1 = {
    name : "Akhilesh Thakur",
    age : 22,
    location : "Bhilwara , Rajasthan",
};

function objFunction(obj1){
        return `Hey there yours name is : ${obj1.name} and your age is : ${obj1.age}`;
}
console.log(obj1);
console.log(objFunction(obj1));


                            // Function with arrays
const array = [1,2,3,4,5,6,7,8,9,10];

function objArray(...arrays){
    return arrays;
}
console.log(objArray(array));
