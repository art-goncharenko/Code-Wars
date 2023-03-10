// Write a function to convert a name into initials.
//     This kata strictly takes two words with one space in between them.
//     The output should be two capital letters with a dot separating them.
//     It should look like this:
// Sam Harris => S.H

function abbrevName(name){
    for (let i = 0; i < name.length; i++) {
        if (name[i] === " "){
            let lastInitial = name[i + 1]
            return (name[0] + "." + lastInitial).toUpperCase()
        }
    }
}

console.log(abbrevName("Sam Harris"))