/* https://codingbat.com/prob/p170371

Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

countX("xxhixx") → 4
countX("xhixhix") → 3
countX("hi") → 0

*/

function countX(str) {
  if (str === '') return 0;

  if (str[0] === 'x') {
    return 1 + countX(str.substring(1));
  } else {
    return countX(str.substring(1));
  }
}

console.log(countX('xxhixx')); // 4
console.log(countX('xhixhix')); // 3
console.log(countX('hi')); // 0
