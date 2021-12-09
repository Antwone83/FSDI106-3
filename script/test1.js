

//  Object literal
let dog = {
    name: "fido",
    age: 3,
    color: "red"
 };

 let cat = { 
     name: "hope",
     age: 3
 };
 console.log(dog);
 console.log(cat);

//  object constructor

function Pet(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}
let lion = new Pet("Alex", 8, "Pink");
console.log(lion);

// class
class Animal {
    // exec auto when a new object is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
 let wildcat = new Animal(" Mike", 7);
 console.log(wildcat);