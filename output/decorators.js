"use strict";
/*Decorators. Types:
    (1) class decorator (inject codes inside the constructor)
    (2)method decorator
    (3)property decorator (codes can be inserted in setter and getter)*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Enable experimentalDecorators in tsconfig.json
function log(configuration) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        //For methods who accepts parameters
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Logging Started");
            //For method that returns a value
            if (configuration != undefined) {
                console.log(configuration.device);
                console.log(configuration.author);
                console.log(configuration.time);
            }
            var result = originalMethod.apply(this, args);
            console.log("Logging Ended");
            return result;
        };
        //Whatever is returned, that's the one executed
        return descriptor;
    };
}
var Banking = /** @class */ (function () {
    function Banking(currentBalance) {
        this.currentBalance = 0;
        this.currentBalance = currentBalance;
    }
    Banking.prototype.doWithdraw = function (amount) {
        this.currentBalance = this.currentBalance - amount;
        return amount;
    };
    Banking.prototype.doDeposit = function (amount) {
        this.currentBalance = this.currentBalance + amount;
        return this.currentBalance;
    };
    Banking.prototype.getCurrentBalance = function () {
        return this.currentBalance;
    };
    //method decorator
    Banking.prototype.displayCurrentBalance = function () {
        console.log(this.currentBalance);
    };
    __decorate([
        log({
            device: "ATM",
            author: "Christine",
            time: new Date()
        })
    ], Banking.prototype, "doWithdraw", null);
    __decorate([
        log()
    ], Banking.prototype, "doDeposit", null);
    __decorate([
        log()
    ], Banking.prototype, "getCurrentBalance", null);
    __decorate([
        log()
    ], Banking.prototype, "displayCurrentBalance", null);
    return Banking;
}());
var banking = new Banking(1000);
banking.displayCurrentBalance();
console.log(banking.getCurrentBalance());
console.log(banking.doWithdraw(500));
console.log(banking.doDeposit(100));
