/* https://codingbat.com/prob/p199368

Given an array of ints, is it possible to choose a group of some of the ints, beginning at 
the start index, such that the group sums to the given target? However, with the additional 
constraint that all 6's must be chosen. (No loops needed.)

groupSum6(0, [5, 6, 2], 8) → true
groupSum6(0, [5, 6, 2], 9) → false
groupSum6(0, [5, 6, 2], 7) → false

*/

function groupSum6(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }

  if (nums[start] === 6) {
    return groupSum6(start + 1, nums, target - nums[start]);
  }

  if (groupSum6(start + 1, nums, target - nums[start])) {
    return true;
  }

  if (groupSum6(start + 1, nums, target)) {
    return true;
  }

  return false;
}

console.log(groupSum6(0, [5, 6, 2], 8)); // true
console.log(groupSum6(0, [5, 6, 2], 9)); // false
console.log(groupSum6(0, [5, 6, 2], 7)); // false
