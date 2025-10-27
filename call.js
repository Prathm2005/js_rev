const Person={name:"Rohit"};
function greet(place) {
    console.log(`My name is ${this.name} and i am from ${place}`)
}

greet.call(Person,"Mumbai")
