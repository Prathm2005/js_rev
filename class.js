class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(){
        console.log("Student is moving");
        
    }
}
const newstu= new Student("Rohit",45);


console.log(newstu.name+" "+newstu.age);
newstu.move();
