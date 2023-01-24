var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.display = function () {
        console.log(this._id + ":" + this._name);
    };
    return Student;
}());
var student = new Student();
student.id = 1234;
student.name = "Gary";
student.display();
console.log(student.id);
console.log(student.name);
