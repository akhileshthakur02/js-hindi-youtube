const user = {
    userName : "Akhilesh",
    userPassword : "12345",
    userLocation : "Bhilwara, Rajasthan",

    welcomeMessage : function(){
      //  console.log(this);
        return `The user Name is : ${this.userName}`;
    }
};

const result = user.welcomeMessage();
console.log(result);
user.userName = "Yuvraj";
const result1 = user.welcomeMessage();
console.log(result1);

// if we console (this keyword) outside the function then, we gives empty objects
console.log(this);
    // Always know that this keyword only work with object not the function. If we print then we gives output undefined
function chai(){
    let username = "Thakur";
    console.log(this.username);
}
chai();

            //  *********************** Arrow Function *******************
const arrow = () =>{
    let username = "Akhiii";
    console.log(this);
}            
arrow();

const add = (num1,num2) =>{
        return num1+num2;
}
console.log(add(2,3));

        // If we have only one line of code then we remove curly braces
const addAnotherWay = (num1, num2) => num1+num2;
console.log(addAnotherWay(2,1));

        // if we not return then there is another way
const notReturn  = (num1, num2) => (num1+num2);
console.log(notReturn(23,2));