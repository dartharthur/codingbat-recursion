/* https://codingbat.com/prob/p161124

Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2

*/

function countAbc(str) {
  if (str === '') return 0;

  if (str.substring(0, 3) === 'abc' || str.substring(0, 3) === 'aba') {
    return 1 + countAbc(str.substring(1));
  } else {
    return countAbc(str.substring(1));
  }
}

console.log(countAbc('abc')); // 1
console.log(countAbc('abcxxabc')); // 2
console.log(countAbc('abaxxaba')); // 2
