let isMale:boolean = true;
//still use === so that if converted to js, it is still safe (always considering type in comparison)
(isMale === true) ? console.log("Male") : console.log("Female");

let givenNumber:number = 100;
if(givenNumber > 0)
{
    console.log("Positive")
}
else if(givenNumber < 0)
{
    console.log("Negative");
}
else
{
    console.log("Zero");
}

let grade:string = "A";
switch (grade)
{
    case "A" :
    {
        console.log("First Class");
        break;
    }
    case "B" :
    {
        console.log("Second Class");
        break;
    }
    case "F" :
    {
        console.log("Fail");
        break;
    }
    default :
    {
        console.log("Something");
        break;
    }
}