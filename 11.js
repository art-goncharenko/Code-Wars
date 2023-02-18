// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
//     The function takes a name as its only argument, and returns one of the following strings:
//
//     name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    let nameArr = [];
    let nameStr = name.split("")
    for (let i = 0; i < nameStr.length; i++) {
        nameArr.push(nameStr[i])
    }
    if (nameArr[0].toLowerCase() === "r") {
        return name + " plays banjo"
    } else return name + " does not play banjo"
}

console.log(areYouPlayingBanjo("Ricky"))

//Solution 2

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }