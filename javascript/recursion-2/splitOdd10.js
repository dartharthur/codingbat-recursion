/* https://codingbat.com/prob/p171660

Given an array of ints, is it possible to divide the ints into two groups, so that 
the sum of one group is a multiple of 10, and the sum of the other group is odd. 
Every int must be in one group or the other. Write a recursive helper method that 
takes whatever arguments you like, and make the initial call to your recursive helper 
from splitOdd10(). (No loops needed.)

*/

function splitOdd10(nums) {
  return divideNums(0, nums, 0, 0);
}

function divideNums(start, nums, g1Sum, g2Sum) {
  if (start >= nums.length) {
    return (
      (g1Sum % 10 === 0 && g2Sum % 2 !== 0) ||
      (g2Sum % 10 === 0 && g1Sum % 2 !== 0)
    );
  }

  if (divideNums(start + 1, nums, g1Sum + nums[start], g2Sum)) {
    return true;
  }

  if (divideNums(start + 1, nums, g1Sum, g2Sum + nums[start])) {
    return true;
  }

  return false;
}

console.log(splitOdd10([5, 5, 5])); // true
console.log(splitOdd10([5, 5, 6])); // false
console.log(splitOdd10([5, 5, 6, 1])); // true
