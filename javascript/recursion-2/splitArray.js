/* https://codingbat.com/prob/p185204

Given an array of ints, is it possible to divide the ints into two groups,
so that the sums of the two groups are the same. Every int must be in one group
or the other. Write a recursive helper method that takes whatever arguments you like,
and make the initial call to your recursive helper from splitArray(). (No loops needed.)

*/

function splitArray(nums) {
  return divideNums(0, nums, 0, 0);
}

function divideNums(start, nums, g1Sum, g2Sum) {
  if (start >= nums.length) {
    return g1Sum === g2Sum;
  }

  if (divideNums(start + 1, nums, g1Sum + nums[start], g2Sum)) {
    return true;
  }

  if (divideNums(start + 1, nums, g1Sum, g2Sum + nums[start])) {
    return true;
  }

  return false;
}

console.log(splitArray([2, 2])); // true
console.log(splitArray([2, 3])); // false
console.log(splitArray([5, 2, 3])); // true
