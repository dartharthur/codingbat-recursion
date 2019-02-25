/* https://codingbat.com/prob/p104029

Given a string, return recursively a "cleaned" string where adjacent chars that are the 
same have been reduced to a single char. So "yyzzza" yields "yza".

stringClean("yyzzza") → "yza"
stringClean("abbbcdd") → "abcd"
stringClean("Hello") → "Helo"

*/

function stringClean(str) {
  if (str === '') return str;

  if (str[0] === str[1]) {
    return stringClean(str.substring(1));
  } else {
    return str[0] + stringClean(str.substring(1));
  }
}

// function stringClean(str) {
//   if (str === '') return str;
//   if (str[0] === str[1]) return str[0] + stringClean(str.substring(calculateOffset(str)));
//   return str[0] + stringClean(str.substring(1));
// }

// function calculateOffset(str) {
//   let offset = 1;
//   let a = 0;
//   let b = 1;
//   while (str[a] === str[b]) {
//     offset++;
//     b++;
//   }
//   return offset;
// }

console.log(stringClean('zzz')); // 'z'
console.log(stringClean('yyzzza')); // 'yza'
console.log(stringClean('abbbcdd')); // 'abcd'
console.log(stringClean('Hello')); // 'Helo'
