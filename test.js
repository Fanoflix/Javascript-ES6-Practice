// --- Array map function ---
const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li> ${color} </li>`);
console.log(items);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const squares = numbers.map(number => number*number);
console.log(squares);

const twice = numbers.map(number => { return number*2})
console.log(twice);
