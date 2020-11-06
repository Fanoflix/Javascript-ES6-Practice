// Arrow functions don't rebind the this keyword.
// ---- Returns the object related to the function (self) ----
const person = {
    talk() {
        setTimeout(() => {
        console.log ('this', this);
        }, 1000);
    }
}

// ---- Returns the Window object (Rebinds "this") ----
// const person = {
//     talk() {
//         setTimeout(function() {
//         console.log ('this', this);
//         }, 1000);
//     }
// }

person.talk();