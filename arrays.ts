let products:string[] = ["Television", "Radio", "Computer"];
for(let index:number = 0; index < products.length; index++)
{
    console.log(products[index]);
}

console.log("----- Adding CD Player -----");

products.push("CD Player");

for(let index:number = 0; index < products.length; index++)
{
    console.log(products[index]);
}

console.log("----- Removing CD Player -----");
products.pop(); //Remove last

for(let index:number = 0; index < products.length; index++)
{
    console.log(products[index]);
}

console.log("----- Sort -----");
products.sort();

for(let index:number = 0; index < products.length; index++)
{
    console.log(products[index]);
}