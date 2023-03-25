// Check to see if a string has the same amount of 'x's and 'o's.
//     The method must return a boolean and be case insensitive.
//     The string can contain any char.

function XO(str) {
    let newStr= str.toLowerCase();
    let amountOfX = 0;
    let amountOfO = 0;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === "x") {
            amountOfX ++
        } if (newStr[i] === "o") {
            amountOfO ++
        }
    } return amountOfX === amountOfO
}

console.log(XO("xooX1"))