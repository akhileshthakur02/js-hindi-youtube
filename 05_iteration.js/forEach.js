const marvel = ["Ironman" , "Batman" , "Thor" , "Conman" , "Padman"];

marvel.forEach(function(items){
        console.log(items);
});

        // we can also access this with the (Arrow Function)

marvel.forEach( (item)=>{
        console.log(item);
})
        // we can also print : pass the function reference
function marvelPrint(item){
    console.log(item);
}
marvel.forEach(marvelPrint);

//  ********************** Important things ******************************

const dbArr = [
    {
        languageName : "JavaScript",
        languageFile : "Js",
    },
    {
        languageName : "Python",
        languageFile : "Py",
    },
    {
        languageName : "Java",
        languageFile : ".java",
    }
]

dbArr.forEach((item)=>{
        console.log(item.languageFile);
})