/* https://codingbat.com/prob/p184029

Given a string, compute recursively (no loops) the number of times 
lowercase "hi" appears in the string.

countHi("xxhixx") → 1
countHi("xhixhix") → 2
countHi("hi") → 1

*/

function countX(str) {
  if (str === '') return 0;

  if (str.substring(0, 2) === 'hi') {
    return 1 + countX(str.substring(2));
  } else {
    return countX(str.substring(1));
  }
}

console.log(countX('')); // 0
console.log(countX('h')); // 0
console.log(countX('hi')); // 1
console.log(countX('xxhixx')); // 1
console.log(countX('xhixhix')); // 2
console.log(countX('xhihix')); // 2
