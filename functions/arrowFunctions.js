var helloFun = function () {
    return "Hello";
};
console.log(helloFun());
var helloFun1 = function (name) {
    return "Hello " + name;
};
console.log(helloFun1("Gary"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(5, 7));
var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(function () {
        return i;
    });
}
for (var i = 0; i < 10; i++) {
    console.log(myArray[i]());
}
