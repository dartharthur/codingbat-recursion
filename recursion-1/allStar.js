/* https://codingbat.com/prob/p183394

Given a string, compute recursively a new string where all the adjacent chars are now 
separated by a "*".

allStar("hello") → "h*e*l*l*o"
allStar("abc") → "a*b*c"
allStar("ab") → "a*b"

*/

function allStar(str) {
  if (str === '') return str;

  if (str[0] !== ' ' && str[1] !== ' ' && str[1] !== undefined) {
    return str[0] + '*' + allStar(str.substring(1));
  } else {
    return str[0] + allStar(str.substring(1));
  }
}

console.log(allStar('ab')); // "a*b"
console.log(allStar('abc')); // "a*b*c"
console.log(allStar('hello')); // "h*e*l*l*o"
console.log(allStar('hello world')); // "h*e*l*l*o w*o*r*l*d"
