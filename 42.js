// In this little assignment you are given a string of space separated numbers,
//     and have to return the highest and lowest number.

function highAndLow(numbers) {
    let arrayOfNumbers = numbers.split(' ').map(Number);
    let lowest = arrayOfNumbers[0]
    let highest = arrayOfNumbers[0]
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] <= lowest) {
            lowest = arrayOfNumbers[i]
        }
        if (arrayOfNumbers[i] >= highest) {
            highest = arrayOfNumbers[i]
        }
    }
    return `${highest} ${lowest}`
}

console.log(highAndLow("1 2 3 4 5"))