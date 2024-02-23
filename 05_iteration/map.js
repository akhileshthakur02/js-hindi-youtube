const arr = [10,20,30,40,50,60,70,80,90];

const ans = arr.map((num)=>{
    return num*10;
});
console.log(ans);

        // we can also use map in case of chaining

const arr1 = [1,2,3,4,5,6];

const result = arr1.map((num)=>{
    return num *10;
}).map((num)=>{
    return num+1;
}).filter((num)=>{
    return num>31;
})
console.log(result);