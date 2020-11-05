let person = {
    name: 'Ammar',
    walk() {
        // to use the Template variables, use ` (tilde key) instead of '
        console.log(`hey!, ${this.name}`);
    }
};
let boundPersonWalk = person.walk.bind(person); // Binding the function.
setTimeout(boundPersonWalk, 1000); // prints "hey!, Ammar"
// If we hadn't bound the function, it would print "hey!, " losing "this".