            // for of:
const arr = [1,2,3,4,5,6];
for(const index of arr){
    console.log(`Your for of loop value is : ${index}`);
}

            // Maps : and in map we print the key value pair
//Map : it is like an object and it takes only key value pair. it doesn't contain any duplicates value

const map = new Map();
map.set("IN" , "India");
map.set("USA" , "United state of America");
map.set("Fr" , "France");

 //console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

/*
        we should always know that (for of loop it doesn't work on objects).
const obj = {
    'name' : "Akhilesh",
    'rollNumber' : "20CS03",
};
for(const [key,value] of map1){
    console.log(key ,':-', value);
} */

            // Here, we are special case for the object printing
const obj = {
    name : "Akhilesh Thakur",
    rollName : "20CS03",
    collegeName : "GECA",
    location : "Madar , JP Nagar",
};
        // this is (for in loop)
for(const key in obj){
    console.log(obj[key]);
}

const arrIn = [10,20,30,40,50];
for(const key in arrIn){
    console.log(arrIn[key]);
}