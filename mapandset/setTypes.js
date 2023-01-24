var courses = new Set();
courses.add("Angular Crash Course");
courses.add("React Crash Course");
courses.add("Node Crash Course");
courses.add("Serverless Crash Course");
console.log(courses.size);
console.log(courses.values);
courses.forEach(function (course) {
    console.log(course);
});
