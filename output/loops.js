"use strict";
console.log("----- Executing FOR LOOP -----");
for (var counter_1 = 1; counter_1 <= 12; counter_1++) {
    console.log(counter_1 + " x 5 = " + (counter_1 * 5));
}
console.log("----- Executing FOR LOOP without initialization and condition blocks -----");
var counter = 1;
for (;; counter++) {
    console.log(counter + " x 5 = " + (counter * 5));
    if (counter > 12)
        break;
}
console.log("----- Executing WHILE LOOP -----");
counter = 1;
while (counter <= 12) {
    console.log(counter + " x 5 = " + (counter * 5));
    counter++;
}
console.log("----- Executing DO-WHILE LOOP -----");
counter = 1;
do {
    console.log(counter + " x 5 = " + (counter * 5));
    counter++;
} while (counter <= 12);
