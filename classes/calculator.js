var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.sum = function (num1, numb2) {
        return num1 + numb2;
    };
    Calculator.sub = function (num1, numb2) {
        return num1 - numb2;
    };
    return Calculator;
}());
console.log(Calculator.sum(10, 20));
console.log(Calculator.sub(20, 90));
