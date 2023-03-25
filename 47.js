// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        result += currentChar.toUpperCase();
        for (let j = 0; j < i; j++) {
            result += currentChar.toLowerCase();
        }
        if (i !== s.length - 1) {
            result += '-';
        }
    }
    return result;
}

console.log(accum("asBd"))