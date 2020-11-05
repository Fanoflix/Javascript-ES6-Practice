// 1, 2 AND 3 ARE EXACTLY THE SAME!

// -- 1 -- Old way
const square = function(number) {
    return number * number;
}
// -- 2 -- ECMA Script (new)
// - Got rid of the function keyword.
// - Use of arrow
const square = (number) => {
    return number * number
}

// -- 3 -- (new) Only 1 line in the function
// - Even shorter
// - returns number * number
// Note: We can remove the parantheses from the parameter if we only have 1 parameter.
const square = number => number * number;

// -- 4 -- (new) If we have 0 parameters
const square = () => {
}

// 1, 2 AND 3 ARE EXACTLY THE SAME!