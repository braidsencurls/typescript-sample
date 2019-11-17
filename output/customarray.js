"use strict";
//Generics
var CustomArray = /** @class */ (function () {
    function CustomArray() {
        this.myArray = [];
    }
    CustomArray.prototype.getItems = function () {
        return this.myArray;
    };
    CustomArray.prototype.addItems = function (item) {
        this.myArray.push(item);
        console.log(item + " has been added!");
    };
    CustomArray.prototype.removeItems = function (item) {
        var index = this.myArray.indexOf(item);
        if (index != -1) {
            this.myArray.splice(index, 1);
        }
    };
    return CustomArray;
}());
var customArray = new CustomArray();
console.log("--- Adding Items ---");
customArray.addItems("Christine");
customArray.addItems("Grace");
console.log("--- Before Removing ---");
customArray.getItems();
console.log(customArray.getItems());
console.log("--- After Removing ---");
customArray.removeItems("Christine");
console.log(customArray.getItems());
