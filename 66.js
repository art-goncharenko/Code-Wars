// Task
// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};

console.log("c".isUpperCase());  // false
console.log("C".isUpperCase());  // true
console.log("hello I AM DONALD".isUpperCase());  // false
console.log("HELLO I AM DONALD".isUpperCase());  // true
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase());  // false
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase());  // true