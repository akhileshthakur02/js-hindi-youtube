let myDate = new Date();
console.log(myDate);
//it gives Wed Feb 21 2024
console.log(myDate.toDateString());
//it gives 2/21/2024
console.log(myDate.toLocaleDateString());

        // We can also create specific dates
let createMyDate = new Date("2024-03-12");
console.log(createMyDate);
console.log(createMyDate.toDateString());  
console.log(createMyDate.toLocaleDateString());      

console.log("-------------------------------------------");
// All methods of Date and Time
let allDate  = new Date();
console.log(allDate.getDate());
console.log(allDate.getFullYear());
console.log(allDate.getMonth());
console.log(allDate.getDay());

console.log("*********************************");
// All the times
console.log(allDate.getHours());
console.log(allDate.getMinutes());
console.log(allDate.getSeconds());
console.log(allDate.getMilliseconds());
