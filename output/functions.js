"use strict";
//Not accepting any parameters and not returning any value
function sayHi() {
    console.log("Hi");
}
sayHi();
//Accepting 3 parameters and returning a number type
function simpleInterest(principal, period, rate) {
    return (principal * period * rate) / 100;
}
var result = simpleInterest(1000, 1, 6);
console.log(result);
//With optional parameter
function simpleInterest2(principal, period, rate) {
    if (rate == undefined)
        rate = 6;
    return simpleInterest(principal, period, rate) / 100;
}
result = simpleInterest2(1000, 1);
console.log(result);
function sumAverage(myNumber) {
    var total = 0;
    for (var counter_1 = 0; counter_1 <= myNumber.length; counter_1++) {
        total = total + myNumber[counter_1];
    }
    return [total, total / myNumber.length];
}
var results = sumAverage([10, 20, 30]);
console.log(results);
