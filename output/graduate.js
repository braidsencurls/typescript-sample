"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//IS-A inheritance
var student_1 = require("./student");
var Graduate = /** @class */ (function (_super) {
    __extends(Graduate, _super);
    function Graduate(studentNumber, firstName, lastName, graduateYear) {
        return _super.call(this, studentNumber, firstName, lastName, graduateYear) || this;
    }
    Graduate.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.graduateYear);
    };
    return Graduate;
}(student_1.Student));
var christine = new student_1.Student(10000, "Christine", "de Paz");
var david = new Graduate(10001, "David", "John", 2017);
christine.studentNumber = 20000;
david.studentNumber = 200001;
//Polymorphism
var students = [christine, david];
students.forEach(function (student) {
    student.display();
});
