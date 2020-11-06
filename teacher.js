import { Person } from './person' // note that we dont add extension
export class Teacher extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    teach() {
        console.log(`${this.name} teaches ${this.course}!`);
    }
}