//If no data type, it can be any type
let product:string = "Television";
let quantity:number = 10;
let price:number = 3.50;
let isCitizen:boolean = true;

console.log(product);
console.log(quantity * price);
console.log(isCitizen);

//'any' type supports any variable type
let myVar:any = 10;
myVar = "ten";
console.log(myVar);