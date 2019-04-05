/* https://codingbat.com/prob/p168295

Given an array of ints, is it possible to divide the ints into two groups, 
so that the sum of the two groups is the same, with these constraints: all 
the values that are multiple of 5 must be in one group, and all the values 
that are a multiple of 3 (and not a multiple of 5) must be in the other. 
(No loops needed.)

*/

function split53(nums) {
  return divideNums(0, nums, 0, 0);
}

function divideNums(start, nums, g1Sum, g2Sum) {
  if (start >= nums.length) {
    return g1Sum === g2Sum;
  }

  if (nums[start] % 5 === 0) {
    return divideNums(start + 1, nums, g1Sum + nums[start], g2Sum);
  }

  if (nums[start] % 3 === 0 && nums[start] % 5 !== 0) {
    return divideNums(start + 1, nums, g1Sum, g2Sum + nums[start]);
  }

  if (divideNums(start + 1, nums, g1Sum + nums[start], g2Sum)) {
    return true;
  }

  if (divideNums(start + 1, nums, g1Sum, g2Sum + nums[start])) {
    return true;
  }

  return false;
}

console.log(split53([1, 1])); // true
console.log(split53([1, 1, 1])); // false
console.log(split53([2, 4, 2])); // true
