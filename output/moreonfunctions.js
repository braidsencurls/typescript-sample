"use strict";
//This is adviseable so that functions can't be called before the function is executed
var sayHelloVar = function sayHello(name) {
    console.log(name);
};
sayHelloVar("Christine");
var areaOfCircle = function (radius) {
    return 3.14 * radius * radius;
};
var areaOfSquare = function (sides) {
    return sides * sides;
};
//passing a function variable
var area = function (func, value) {
    return func(value);
};
console.log(areaOfCircle, 5);
//Calling an anonymous function
(function (name) {
    console.log("Welcome, " + name);
})("Christine");
//lambda expression
var areaOfCircleV1 = function (radius) {
    return 3.14 * radius * radius;
};
var areaOfCircleV2 = function (radius) { return 3.14 * radius * radius; };
var areaV3 = function (func, value) {
    return func(value);
};
var n = areaV3(function (value) {
    return 3.14 * value * value;
}, 10);
console.log("Called by using Lambda: " + n);
