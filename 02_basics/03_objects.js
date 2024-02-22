const mySymbol = Symbol();

let JsUser = {
    // symbol
    [mySymbol] : "myKey1",
    name : "Akhilesh",
    "full name" : "Akhilesh Thakur",
    age : 22,
    location : "Bhilwara",
    email : "akhilesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Tuesday"],
};

// we can access object key values in two ways
console.log(JsUser.name);
// always follow this way
console.log(JsUser["name"]);
console.log(JsUser["age"]);

console.log(JsUser["full name"]);
//console.log(full name); we cannot access this way.

// Access symbol
console.log(JsUser[mySymbol]);
//console.log(JsUser["mySymbol"]); we cannot access in this way.

/* If we want that nobody can change our value in JsUser objects then , 
Object.freeze(JsUser); */

JsUser.greeting = function(){
    console.log(`Hello brother ${this["full name"]}`);
};
console.log(JsUser.greeting());
