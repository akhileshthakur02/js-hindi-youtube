        // we can create array using two ways
const arr1 = [1,2,3,4,5,6 ,"Akhilesh",true];
console.log(arr1);
console.log(arr1[7]);

const arr2 = new Array(1,2,3,4,5,6);
console.log(arr2);

arr2.push(7);
arr2.push(8);
arr2.push(9);
arr2.pop();
console.log(arr2);

// simply it can add 22 in the starting point
arr2.unshift(22);
console.log(arr2);

// it simply works like it removes the starting element of the array
arr2.shift();
console.log(arr2);

// it means that all the values are completely converted into strings
const newArr = arr2.join();
console.log(newArr);
console.log(typeof newArr);

console.log("----------------------------------------------------------");
                // ****************Slice and Splice :  slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.

console.log("A" , arr2);

const myNewArr1 = arr2.slice(1,3);
console.log(myNewArr1);

console.log("B" , arr2);
const myNewArr2 = arr2.splice(1,3);
console.log(myNewArr2);

console.log(arr2);
