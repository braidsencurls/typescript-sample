"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    //Constructor overloading using optional parameters
    function Student(studentNumber, firstName, lastName, graduateYear) {
        this._studentNumber = 0;
        this.graduateYear = 0;
        //Use the setter
        this.studentNumber = studentNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        if (graduateYear == undefined) {
            this.graduateYear = 0;
        }
        else {
            this.graduateYear = graduateYear;
        }
    }
    Student.prototype.display = function () {
        //Use the getter
        console.log(this.studentNumber);
        console.log(this.firstName);
        console.log(this.lastName);
    };
    Object.defineProperty(Student.prototype, "studentNumber", {
        //Getter
        get: function () {
            return this._studentNumber;
        },
        //Setter
        set: function (_studentNumber) {
            this._studentNumber = _studentNumber;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
