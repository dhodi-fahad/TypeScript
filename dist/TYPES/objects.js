"use strict";
/**
OBJECT DATA TYPES
- Interfaces
- Classes
- Enum
- Array
- Tuple

 **/
const greet = (student) => {
    return "Hello " + student.name;
};
console.log(greet({ name: "John Doe", age: 16 }));
console.log(greet({ name: "James" }));
// CLASS
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
let cattle = new Animal('Cow', 'Mooooo...');
cattle.makeSound();
