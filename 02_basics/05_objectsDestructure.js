const course = {
    courseName : "JavaScript",
    courseFee : "999",
    courseInstructure : "Hitesh Sir",
};
        // this is called destructure of an object : extracting values from an object property and assigning them to a variable
const {courseInstructure : Inst} = course;
console.log(Inst);