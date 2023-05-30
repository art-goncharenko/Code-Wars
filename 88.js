// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
//
//     The list will never be empty and will only contain values that are greater than or equal to zero.

function sumSquareEvenRootOdd(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0)
            sum += nums[i] ** 2;
        else
            sum += Math.sqrt(nums[i]);
    }
    return Number(sum.toFixed(2));
}

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))