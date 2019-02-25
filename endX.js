/* https://codingbat.com/prob/p105722


Given a string, compute recursively a new string where all the 
lowercase 'x' chars have been moved to the end of the string.

endX("xxre") → "rexx"
endX("xxhixx") → "hixxxx"
endX("xhixhix") → "hihixxx"

*/

function endX(str) {
  if (str === '') return str;

  if (str[0] === 'x') {
    return endX(str.substring(1)) + str[0];
  } else {
    return str[0] + endX(str.substring(1));
  }
}

console.log(endX('xxre')); // 'rexx'
console.log(endX('xxhixx')); // 'hixxxx'
console.log(endX('xhixhix')); // 'hihixxx'
