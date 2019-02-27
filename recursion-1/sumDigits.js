/* https://codingbat.com/prob/p163932

Given a non-negative int n, return the sum of its digits recursively (no loops).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 
10 removes the rightmost digit (126 / 10 is 12).

sumDigits(126) → 9
sumDigits(49) → 13
sumDigits(12) → 3

*/

function sumDigits(n) {
  if (n === 0) return 0;

  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(126)); // 9
console.log(sumDigits(49)); // 13
console.log(sumDigits(12)); // 3
