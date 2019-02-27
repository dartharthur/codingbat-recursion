/* https://codingbat.com/prob/p170924

Given a string, compute recursively (no loops) a new string where all appearances of "pi" 
have been replaced by "3.14".

changePi("xpix") → "x3.14x"
changePi("pipi") → "3.143.14"
changePi("pip") → "3.14p"

*/

function changePI(str) {
  if (str === '') return str;

  if (str.substring(0, 2) === 'pi') {
    return '3.14' + changePI(str.substring(2));
  } else {
    return str[0] + changePI(str.substring(1));
  }
}

console.log(changePI('xpix')); // 'x3.14x'
console.log(changePI('pipi')); // '3.143.14'
console.log(changePI('pip')); // '3.14p'
