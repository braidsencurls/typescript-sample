//This is adviseable so that functions can't be called before the function is executed
let sayHelloVar = function sayHello(name:string) {
    console.log(name);
}

sayHelloVar("Christine");


let areaOfCircle = function (radius:number):number {
    return 3.14 * radius * radius;
}

let areaOfSquare = function (sides:number):number {
    return  sides * sides;
}

//passing a function variable
let area = function (func:any, value:string) {
    return func(value);
}

console.log(areaOfCircle, 5);

//Calling an anonymous function
(function (name:string) {
    console.log("Welcome, " + name);
})("Christine");

//lambda expression
let areaOfCircleV1 = (radius:number) => {
    return 3.14 * radius * radius;
}

let areaOfCircleV2 = (radius:number) => 3.14 * radius * radius;

let areaV3 = function (func:Function, value:number) {
    return func(value);
}

let n:number = areaV3((value:number) => {
    return 3.14 * value * value
}, 10);

console.log("Called by using Lambda: " + n);