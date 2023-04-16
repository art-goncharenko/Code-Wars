// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//     Examples:
//     input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5

function roundToNext5(n){
    let result = 0
    for (let i = 0; i < 5; i++) {
        if (((i + n) % 5) === 0) {
            result = i + n
        }
    }
    return  result
}

console.log(roundToNext5(11))