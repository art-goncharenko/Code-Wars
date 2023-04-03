// Given a non-empty array of integers, return the result of growing the values together in order.
//     Example:  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
    return x.reduce((a, b) => a * b, 1);
}

console.log(grow([1, 2, 3, 4]));