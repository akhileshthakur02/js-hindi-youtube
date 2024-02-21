let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
arr1.push(arr2);
        // output is : [1,2,3,4,5, [6,7,8,9,10]] in javaScript array can take any number of data so here it will take array as a data
console.log(arr1);
console.log(arr1[5]);
console.log(arr1[5][1]);

// But we can merge both the arrays properly by using the concatenation.

const newArr = arr1.concat(arr2);
console.log(newArr);

 // we can mainly use spread operator

const newSpread = [...arr1 , ...arr2];
console.log(newSpread);
console.log(newSpread[9]);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Make string into array
console.log(Array.from("Akhilesh"));

// if we make multiple datatypes into an array

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));