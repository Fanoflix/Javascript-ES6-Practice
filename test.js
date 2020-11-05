
const person = {
    name: 'Ammar',
    walk() {
        console.log(this);
    }    
};

// the value of this is determined by how a function is called, 
// if we call a function as a method in an object,
// "this" will always reutrn a reference to that object.

// if we call a function as a standalone object, or outside an object "this" will
// return the global object which is: the window object in browsers.
person.walk();

const walk = person.walk; //Just getting a reference to the walk() function. (NOT CALLING IT)
walk();