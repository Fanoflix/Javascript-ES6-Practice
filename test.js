// --- SPREAD OPERATOR ---
const first = [1,2,3];
const second = [4,5,6];

// spread operator --> ...;
// the triple dots mean including all the content of the array
// ...first means all the elements of the array 'first'

// concatinating two arrays
const combined = [...first, ...second];
console.log(combined);

// useful for adding values in the middle
const combined2 = [...first, 'a', ...second]; 
console.log(combined2); // [1, 2, 3, "a", 4, 5, 6]

// some more examples:
const combined3 = ['a', ...first, ...second]; 
const combined4 = [...first, ...second, 'a'];
console.log(combined3); // ["a", 1, 2, 3, 4, 5, 6]
console.log(combined4); // [1, 2, 3, 4, 5, 6, "a"]

// cloning arrays

const close = [...first];

// spread operator on objects
