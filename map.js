const fruit= new Map();

fruit.set("apple",500)
fruit.set("banana",200)
fruit.set("mango",300)

let result= fruit.get("mango");
console.log(result); // to get items fom map

console.log(fruit.size); // to get size

// console.log(fruit.clear); //clear all the element from map
console.log(fruit.has("apple")); // to verify if that element is present in map or not
//o/p -> true


