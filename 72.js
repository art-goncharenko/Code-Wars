// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
    if (s1 === undefined || s2 === undefined || s3 === undefined) {
        return "Undefined score";
    }
    let average = (s1 + s2 + s3) / 3
    if (average >= 90 && average <= 100) {
        return "A"
    } else if (average >= 80 && average < 90) {
        return "B"
    } else if (average >= 70 && average < 80) {
        return "C"
    } else if (average >= 60 && average < 70) {
        return "D"
    } else return "F"
}


console.log(getGrade(78, 69, 88))