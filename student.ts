import {Person} from './person';

 export class Student implements Person
{
   private _studentNumber:number = 0;
   public lastName:string;
   public firstName:string;
   protected graduateYear:number = 0;

   //Constructor overloading using optional parameters
    constructor(studentNumber:number, firstName:string, lastName:string, graduateYear?:number)
    {
        //Use the setter
        this.studentNumber = studentNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        if(graduateYear == undefined)
        {
            this.graduateYear = 0;
        }
        else
        {
            this.graduateYear = graduateYear;
        }
    }

    display()
    {
        //Use the getter
        console.log(this.studentNumber);
        console.log(this.firstName);
        console.log(this.lastName);
    }

    //Getter
    get studentNumber():number
    {
        return this._studentNumber;
    }

    //Setter
    set studentNumber(_studentNumber:number)
    {
        this._studentNumber = _studentNumber;
    }
}