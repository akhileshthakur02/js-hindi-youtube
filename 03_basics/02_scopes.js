function one(){
    const username = "Akhilesh";
        function Two(){
            const website = "Youtube";
            console.log(username + website);
        }
       // console.log(website); it is not possible
        Two();
        console.log(username);
}
one();

//      *********************** Interesting Topic ***************************
                        // Here, it is possible
console.log(addOne(3));
function addOne(num){
    return num+1;
}

                        // Here, it is not possible
//console.log(fun(20));
const fun = function addTwo(value){
    return value+2;
}
console.log(fun(20));  // only this will valid

