/* https://codingbat.com/prob/p195413

Given a string and a non-empty substring sub, compute recursively the largest 
substring which starts and ends with sub and return its length.

strDist("catcowcat", "cat") → 9
strDist("catcowcat", "cow") → 3
strDist("cccatcowcatxx", "cat") → 9

*/

function strDist(str, sub) {
    if (str.length < sub.length)
        return 0;

    let first = str.substring(0, sub.length);
    let last = str.substring(str.length - sub.length);

    if (first === sub && last === sub)
        return str.length;
    
    if (first !== sub)
        return strDist(str.substring(1), sub);

    if (last !== sub)
        return strDist(str.substring(0, str.length - 1), sub);

    return strDist(str.substring(1, str.length - 1), sub);
}

console.log(strDist("aaaaa", "b")); // 0
console.log(strDist("catcowcat", "cat")); // 9
console.log(strDist("catcowcat", "cow")); // 3
console.log(strDist("cccatcowcatxx", "cat")); // 9
