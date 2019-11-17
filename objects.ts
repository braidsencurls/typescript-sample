//Javascript Object

let student = {
    firstName : "",
    lastName : "",

    display:function(x:number, y:number) {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log("Sum: " + (x+y));
    }
}

let student1 = {
    firstName : "Christine",
    lastName : "De Paz",

}

let student2 = {
    firstName : "David",
    lastName : "John",
}

student.display.call(student1, 10, 20);
student.display.apply(student2, [10, 20]);