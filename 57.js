// Your task is to make two functions ( max and min, or maximum and minimum, etc.,
//     depending on the language ) that receive a list of integers as input, and
// return the largest and lowest number in that list, respectively.

const min = function(list){
    list.sort((a,b) => a - b)
    return list[0];
}

const max = function(list){
    list.sort((a,b) => a - b)
    return list[list.length - 1];
}

console.log(min([1,5,6,2,-1,0]), max([1,5,6,2,-1,0]))