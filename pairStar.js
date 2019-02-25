/* https://codingbat.com/prob/p158175

Given a string, compute recursively a new string where identical chars that are 
adjacent in the original string are separated from each other by a "*".

pairStar("hello") → "hel*lo"
pairStar("xxyy") → "x*xy*y"
pairStar("aaaa") → "a*a*a*a"

*/

function pairStar(str) {
  if (str === '') return str;

  if (str[0] === str[1]) {
    return str[0] + '*' + pairStar(str.substring(1));
  } else {
    return str[0] + pairStar(str.substring(1));
  }
}

console.log(pairStar('hello')); // 'hel*lo'
console.log(pairStar('xxyy')); // 'x*xy*y'
console.log(pairStar('aaaa')); // 'a*a*a*a'
