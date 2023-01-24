var courses = ["Angular", "React", "ES6", "JMS"];

courses.push("Spring Security");

courses.push("Kafka");

courses.push("Node.JS");

courses.push("Typescript");

for(var i=0; i<courses.length; i++) {
    console.log(courses[i]);
}

//De-structuring Arrays
var[a, b, c] = courses;
console.log(a + "-" + b + "-" + c);
