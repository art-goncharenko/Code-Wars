// Simple, given a string of words, return the length of the shortest word(s).
//     String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let array = s.split(" ");
    let shortest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < shortest.length) {
            shortest = array[i]
        }
    }
    return shortest.length
}

console.log(findShort("Everyone will know you are here"))