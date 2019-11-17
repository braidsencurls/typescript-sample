"use strict";
//Javascript Object
var student = {
    firstName: "",
    lastName: "",
    display: function (x, y) {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log("Sum: " + (x + y));
    }
};
var student1 = {
    firstName: "Christine",
    lastName: "De Paz",
};
var student2 = {
    firstName: "David",
    lastName: "John",
};
student.display.call(student1, 10, 20);
student.display.apply(student2, [10, 20]);
