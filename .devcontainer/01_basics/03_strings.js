const name = "Akhilesh";
const repoCount = 50;
        // Avoid this syntax use backticks
console.log(name + repoCount);
        // Use this syntax always to concat the strings
console.log(`Hello guys my name is ${name} and my repoCount is ${repoCount}`);

        // Another ways to create strings 
    
const anotherWayString = new String("Akhilesh Thakur");
    // Tells us the length of the  string
console.log(`The length of the string is : ${anotherWayString.length}`);

        // Access the character
console.log(`Character is : ${anotherWayString.charAt(14)}`);
console.log(anotherWayString[0]);
console.log(anotherWayString.__proto__);

        //  for UpperCase
console.log(anotherWayString.toUpperCase());
        // Giving the index of the string
console.log(anotherWayString.indexOf('h'));

        // Substring
console.log(anotherWayString.substring(0,8));        
        // slice : means here 1 is inclusive and 3 is exclusive
console.log(anotherWayString.slice(1));
console.log(anotherWayString.slice(1, 3));  


            
        // trim : trim the white spaces by the starting point and the ending point of the string
const nameOfStudent = "           ThakurAkhilesh           ";
console.log(nameOfStudent);            
console.log(nameOfStudent.trim());

            // replace
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));  
console.log(url.includes("hitesh")); // it can simply gives true or false 

            // split
const gameName = new String('Akhilesh-Thakur');
console.log(gameName.split("-"));