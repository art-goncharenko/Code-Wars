// Simple, remove the spaces from the string, then return the resultant string.

//Solution 1

function noSpace(x){
    let array = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            array.push(x[i])
        }
    } return array.join("")
}

//Solution 2

// function noSpace(x) {
//     return x.split(" ").join("")
// }

console.log(noSpace("Early to bed, early to rise, makes a man healthy, wealthy and wise"))