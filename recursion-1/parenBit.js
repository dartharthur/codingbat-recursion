/* https://codingbat.com/prob/p137918

Given a string that contains a single pair of parenthesis, 
compute recursively a new string made of only of the parenthesis and 
their contents, so "xyz(abc)123" yields "(abc)".

parenBit("xyz(abc)123") → "(abc)"
parenBit("x(hello)") → "(hello)"
parenBit("(xy)1") → "(xy)"

*/

function parenBit(str) {
    if (str === '') return str;

    let first = str[0];
    let last = str[str.length - 1];
    if (first === '(' && last === ')') return str;

    if (first !== '(') 
        return parenBit(str.substring(1));
    if (last !== ')') 
        return parenBit(str.substring(0, str.length - 1));

    return parenBit(str.substring(1, str.length - 1));
}

console.log(parenBit("xyz(abc)123")); // '(abc);
console.log(parenBit("x(hello)")); // '(hello)';
console.log(parenBit("(xy)1")); // '(xy)';
