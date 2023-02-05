// "Summation"
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

let num = 365;
// "change the value of num to test"

let summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum;
}

console.log("Solution 1. Sum of 1 to " + num + " is " + summation(num));

// Solution 2

let num2 = 52;

let summation2 = function(num2) {
    let arr = [];
    for (let i = 1; i <= num2; i++) {
        arr.push(i);
    }
    return arr.reduce((sum, cur) => sum + cur, 0);
}

console.log("Solution 2: Sum of 1 to " + num2 + " is " + summation2(num2));