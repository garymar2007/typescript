let student = new Map([
    ["Gary", 15],
    ["Leo", 20],
    ["Teagan", 22]
]);

console.log(student.get("Leo"));
student.set("David", 17);
console.log(student.size);
student.delete("David");
console.log(student.has("David"));
//student.clear();
console.log(student.size === 0);
console.log(student.keys());
console.log(student.values());

for(let k of Array.from(student.keys())) {
    console.log(k + ":" + student.get(k));
}