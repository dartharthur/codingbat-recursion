/* https://codingbat.com/prob/p183174

Given a string, return true if it is a nesting of zero or more pairs of parenthesis, 
like "(())" or "((()))". Suggestion: check the first and last chars, 
and then recur on what's inside them.

nestParen("(())") → true
nestParen("((()))") → true
nestParen("(((x))") → false

*/

function nestParen(str) {
    if (str === '') return true;

    if (str[0] === '(' && str[str.length - 1] === ')') {
        return nestParen(str.substring(1, str.length - 1));
    } else {
        return false;
    }
};

console.log(nestParen("(())")); // true
console.log(nestParen("((()))")); // true
console.log(nestParen("(((x))")); // false
