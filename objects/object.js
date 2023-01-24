var student = {
    firstName: "John",
    lastName: "Bailey",
    score: 90
};
console.log(student.firstName);
console.log(student.score);
for (var item in student) {
    console.log(item + ":" + student[item]);
}
var firstName = student.firstName, lastName = student.lastName;
console.log(firstName + " " + lastName);
