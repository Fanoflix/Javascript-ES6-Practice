// Objects in javascript are a collection of key value pairs.
// We will make a const variable, and set it to an object:

const person = {
    name: 'Ammar',
    //walk: function() {}, // old way
    talk() { }, // new ES6 way
    walk() { }    
};
// Two ways to access these members:
// dot "." method
// bracket notation
person.talk();

// Bracket notation is used, when we don't know what property we want to
// access. Imagine "targetMember" is an input field on a farm.
// Depending on the user input, we access a different member:
const targetMember = 'name';
person['targetMember'] = 'John';