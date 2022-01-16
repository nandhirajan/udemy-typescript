/**
 * Function Expression is the recommended way in TS to define the types
 */

console.log(fullName('Jordan', 'Hudgens'));
// console.log(otherFullName('Jordan', 'Hudgens'));
// console.log(thirdFullName('Jordan', 'Hudgens'));

// Function declaration
function fullName(first: string, last: string): string {
    return first + " " + last;
}

// Function expression
let otherFullName: (first: string, last: string) => string;

otherFullName = function (first: string, last: string) {
    return first + " " + last;
}

let thirdFullName: (first: string, last: string) => string = function (first: string, last: string) {
    return first + " " + last;
}