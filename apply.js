const Person={name:"Rohit"};
function greet(place,age) {
    console.log(`My name is ${this.name} and i am from ${place}, I am ${age} year's old.`)
}

greet.apply(Person,["Mumbai",45])
