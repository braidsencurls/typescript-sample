//Not accepting any parameters and not returning any value
function sayHi():void
{
    console.log("Hi");
}

sayHi();

//Accepting 3 parameters and returning a number type
function simpleInterest(principal:number, period:number, rate:number):number
{
 return(principal * period * rate) / 100;
}

let result:number = simpleInterest(1000, 1, 6);
console.log(result);

//With optional parameter
function simpleInterest2(principal:number, period:number, rate?:number):number
{
    if(rate == undefined)  rate = 6;
    return simpleInterest(principal, period, rate) / 100;
}

result = simpleInterest2(1000, 1);
console.log(result);

function sumAverage(myNumber:number[]):number[]
{
let total:number = 0;
for(let counter:number = 0; counter <= myNumber.length; counter++)
{
    total = total + myNumber[counter];
}
return [total, total/myNumber.length];
}

let results:number[] = sumAverage([10,20,30]);
console.log(results);