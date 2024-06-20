/**
OBJECT DATA TYPES
- Interfaces
- Classes
- Enum
- Array
- Tuple

 **/




// INTERFACE
interface Student {
    name: string;
    age?: number; // optional
}

const greet = (student: Student) => {
    return "Hello " + student.name;
}
console.log(greet({name: "John Doe", age:16}))
console.log(greet({name: "James"}))

// CLASS
class Animal {
    name: string;
    sound: string;

    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
    }

    makeSound () {
        console.log(this.sound)
    }
}

let cattle = new Animal('Cow', 'Mooooo...')

cattle.makeSound()

