// js is automatically convert it into number
const score = 100;
console.log(score); 
// we can declare that is number
const anotherScore = new Number(100);
console.log(anotherScore);


            // toString method
console.log(anotherScore.toString());
// simply it will put zeroes afetr decimal   
console.log(anotherScore.toFixed(4));         

const otherNumber = 23.3966
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000000000000;
console.log(hundreds.toLocaleString('en-IN'))

console.log("*********************************************");

//                  ********************************** Math Function ************************************
console.log(Math);
console.log(Math.abs(-90));
console.log(Math.round(12.433));
// round off and gives the smaller value
console.log(Math.floor(4.6));
// round off and gives the bigger value
console.log(Math.ceil(4.1));
console.log(Math.min(2,3,4,5,5,244));
console.log(Math.max(12,345,233,12,123566));

console.log(Math.random());
// Here we add 1 because the value is printed greater than 0 simply means cannot 
console.log((Math.random()*10)+1);
    
console.log(Math.floor(Math.random()*10)+1);



const min = 10;
const max = 20;
    // value is above 10 and below 20
console.log(Math.floor(Math.random()*(max-min+1)) + min);