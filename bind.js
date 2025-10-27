const Person={name:"Rohit"};
function greet(place,age) {
    console.log(`My name is ${this.name} and i am from ${place}, I am ${age} year's old.`)
}

const funcn=greet.bind(Person,"Mumbai",45)

funcn();
