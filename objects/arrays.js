var courses = ["Angular", "React", "ES6", "JMS"];
courses.push("Spring Security");
courses.push("Kafka");
courses.push("Node.JS");
courses.push("Typescript");
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
//De-structuring Arrays
var a = courses[0], b = courses[1], c = courses[2];
console.log(a + "-" + b + "-" + c);
