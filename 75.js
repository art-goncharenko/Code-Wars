// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
    if (name !== owner) {
        return "Hello guest"
    } else return "Hello boss"
}

console.log(greet("Ali", "Ali"))