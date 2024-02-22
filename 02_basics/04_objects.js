const regularUser = {
    fullName : {
        userFullName : {
            firstName : "Akhilesh",
            lastNmae : "Thakur",
        },
    },
};
console.log(regularUser.fullName.userFullName.firstName);


        // We can also join more than one objects
const obj1 = {
    1 : "a",
    2 : "b",
 };
const obj2 = {
    3 : "c",
    4 : "d",
};
    // one way
const result = Object.assign({}, obj1 , obj2);
console.log(result);
    // Another way
const result1 = {...obj1 , ...obj2};
console.log(result);

//we can also take out keys and values
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

// we can also ask object that it contain some values or not
console.log(obj1.hasOwnProperty("1"));