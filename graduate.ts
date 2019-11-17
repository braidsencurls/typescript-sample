//IS-A inheritance
import { Student } from './student'
class Graduate extends Student {
    constructor(studentNumber:number, firstName:string, lastName:string, graduateYear:number)
    {
        super(studentNumber, firstName, lastName, graduateYear);
    }

    display() {
        super.display();
        console.log(this.graduateYear);
    }
}

let christine:Student = new Student(10000, "Christine", "de Paz");
let david:Graduate = new Graduate(10001, "David", "John", 2017);
christine.studentNumber = 20000;
david.studentNumber = 200001;

//Polymorphism
let students:Student[] = [christine, david];
students.forEach((student:Student) => {
    student.display();
})