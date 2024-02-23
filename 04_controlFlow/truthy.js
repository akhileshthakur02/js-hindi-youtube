const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

                       // falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

                       //truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//                  **********************Nullish Coalescing operator *****************
// This nullish operator is basically designed for the the (null and undefined).

let val;
// val = 3 ?? 100;
// val = null ?? 20;
val = undefined ?? 10;
console.log(val);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")