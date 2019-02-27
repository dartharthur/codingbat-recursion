/* https://codingbat.com/prob/p167015

Given a string, compute recursively (no loops) the number of "11" substrings in the string. 
The "11" substrings should not overlap.

count11("11abc11") → 2
count11("abc11x11x11") → 3
count11("111") → 1

*/

function count11(str) {
  if (str === '') return 0;

  if (str.substring(0, 2) === '11') {
    return 1 + count11(str.substring(2));
  } else {
    return count11(str.substring(1));
  }
}

console.log(count11('11abc11')); // 2
console.log(count11('abc11x11x11')); // 3
console.log(count11('111')); // 1
