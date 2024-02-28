        // these are the primitives datatypes and both a and b are independent to each other
let a = 10;
let b = a;
b = 12;
console.log(a);
console.log(b);

let prod1 = {
    name : "Akhilesh",
    passWord : "12345",
    id : "1",
};
        // they both are non primitive datatypes and they are dependent to each other : both reference are pointing to each other
let prod2 = prod1;
prod1.id = "2";
prod2.name = "Akhilesh Thakur";
console.log(prod1);
console.log(prod2);