"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return "".concat((this.firstName), " ").concat((this.lastName));
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.get = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.prototype.checkEmail = function (e) {
        if (this.email === e) {
            return true;
        }
        else {
            return false;
        }
    };
    return User;
}());
exports.User = User;
var user = new User('Gary', 'Ma', 'gary.ma@csgi.com');
console.log(user.get());
console.log(user.fullName);
console.log(user.checkEmail('gary.ma@csgi.com'));
console.log(user.checkEmail('teagan.ma@csgi.com'));
