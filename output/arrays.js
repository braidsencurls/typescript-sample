"use strict";
var products = ["Television", "Radio", "Computer"];
for (var index = 0; index < products.length; index++) {
    console.log(products[index]);
}
console.log("----- Adding CD Player -----");
products.push("CD Player");
for (var index = 0; index < products.length; index++) {
    console.log(products[index]);
}
console.log("----- Removing CD Player -----");
products.pop(); //Remove last
for (var index = 0; index < products.length; index++) {
    console.log(products[index]);
}
console.log("----- Sort -----");
products.sort();
for (var index = 0; index < products.length; index++) {
    console.log(products[index]);
}
