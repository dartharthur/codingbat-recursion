/* https://codingbat.com/prob/p118230

Given a string, compute recursively a new string where all the 'x' chars have been removed.

noX("xaxb") → "ab"
noX("abc") → "abc"
noX("xx") → ""

*/

function noX(str) {
  if (str === '') return str;

  if (str[0] === 'x') {
    return noX(str.substring(1));
  } else {
    return str[0] + noX(str.substring(1));
  }
}

console.log(noX('xaxb')); // 'ab'
console.log(noX('abc')); // 'abc'
console.log(noX('xx')); // ''
