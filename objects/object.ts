var student = {
    firstName: "John",
    lastName: "Bailey",
    score: 90
};

console.log(student.firstName);

console.log(student.score);


for(var item in student){
    console.log(item + ":" + student[item]);
}


//De-structure objects
var {firstName, lastName} = student;
console.log(firstName + " " + lastName);