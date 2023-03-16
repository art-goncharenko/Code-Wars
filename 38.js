// Given a set of numbers, return the additive inverse of each.
//     Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(-array[i])
    }
    return result
}

console.log(invert([-1, 2, 3, 4, 5]))