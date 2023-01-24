function hello(name) {
    return "hello " + name;
}
function add(num1, num2) {
    return num1 + num2;
}
console.log(hello('gary'));
console.log("Sum is : " + add(2, 10));
//Optional parameter
// function display(id: number, name: string, role?: string) {
//     console.log("ID: " + id + ", Name: " + name + (role != undefined? ", Role: " + role : ""));
// }
// display(1, "Gary");
//Using Default values
function display(id, name, role) {
    if (role === void 0) { role = "User"; }
    console.log("ID: " + id + ", Name: " + name + (role != undefined ? ", Role: " + role : ""));
}
display(1, "Gary");
display(0, "admin", "ADMIN");
// pass a function as parameter
function calculator(fun) {
    console.log(fun(10, 20));
}
calculator(add);
//return a function
function calculator2() {
    function substract(num1, num2) {
        return Math.abs(num1 - num2);
    }
    return substract;
}
var sub = calculator2();
console.log(sub(12, 34));
console.log(calculator2()(20, 50));
//anonymous function
var hello2 = function (name) {
    return "Hello " + name;
};
console.log(hello2('Gary'));
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
}
doubleMe(12);
doubleMe("gary");
