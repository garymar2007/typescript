var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "BOA";
        console.log(Check.bankName);
    };
    Check.bankName = "Bank of America";
    return Check;
}());
var check = new Check();
check.display();
console.log(Check.bankName);
//static property of a class could be modified.
Check.bankName = "BOA";
console.log(Check.bankName);
