/* https://codingbat.com/prob/p186177

Given a string and a non-empty substring sub, compute recursively the number 
of times that sub appears in the string, without the sub strings overlapping.

strCount("catcowcat", "cat") → 2
strCount("catcowcat", "cow") → 1
strCount("catcowcat", "dog") → 0

*/

function strCount(str, sub) {
    if (str === '') return 0;

    if (str.substring(0, sub.length) === sub) {
        return 1 + strCount(str.substring(sub.length), sub);
    } else {
        return strCount(str.substring(1), sub);
    }
}

console.log(strCount("catcowcat", "cat")); // 2
console.log(strCount("catcowcat", "cow")); // 1
console.log(strCount("catcowcat", "dog")); // 0
