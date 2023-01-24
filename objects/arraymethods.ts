var levels:number[] = [20, 30, 12, 30, 100, 20];
console.log(levels.toString());
console.log(levels.join(" "));
var levels2 = levels.slice(3,5);
console.log(levels2);
levels.splice(2, 3, 88, 99);
console.log(levels);

levels.push(101, 105, 201);
console.log(levels);
console.log(levels.pop());
console.log(levels);