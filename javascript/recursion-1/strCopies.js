/* https://codingbat.com/prob/p118182

Given a string and a non-empty substring sub, compute recursively if 
at least n copies of sub appear in the string somewhere, 
possibly with overlapping. N will be non-negative.

strCopies("catcowcat", "cat", 2) → true
strCopies("catcowcat", "cow", 2) → false
strCopies("catcowcat", "cow", 1) → true

*/

function strCopies(str, sub, n) {
    if (n === 0) return true;
    if (str.length < sub.length) return false;

    if (str.substring(0, sub.length) === sub)
        return strCopies(str.substring(1), sub, n - 1);
    
    return strCopies(str.substring(1), sub, n);
}

console.log(strCopies("catcowcat", "cat", 2)); // true
console.log(strCopies("catcowcat", "cow", 2)); // false
console.log(strCopies("catcowcat", "cow", 1)); // true
