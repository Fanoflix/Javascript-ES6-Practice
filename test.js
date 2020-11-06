// --- Classes ---

class Person {
    //constructor
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} walks!`);
    }
}

// Use 'new' keyword to make an object of the class
const person = new Person('Ammar');
const person2 = new Person('Mussab');
person.walk();
person2.walk();

// Class Teacher is inheriting Person
class Teacher extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    teach() {
        console.log(`${this.name} teaches ${this.course}!`);
    }
}

const teacher = new Teacher('Ammar', 'Maths');
teacher.teach();