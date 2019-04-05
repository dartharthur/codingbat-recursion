/* https://codingbat.com/prob/p105136

Given an array of ints, is it possible to choose a group of some of the ints, 
such that the group sums to the given target, with this additional constraint: 
if there are numbers in the array that are adjacent and the identical value, they 
must either all be chosen, or none of them chosen. For example, with the array {1, 2, 2, 2, 5, 2}, 
either all three 2's in the middle must be chosen or not, all as a group. (one loop can be used to 
find the extent of the identical values).

*/

/*
  Key Insight:
    This is basically the same as the initial groupSum problem, except
    here we need to treat GROUPS of numbers as one number.

    So there's no need for additional branching logic, can just run
    a loop to figure out i and sum. Works the same whether it's one
    number or a group of numbers.
*/

function groupSumClump(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }

  let i = start;
  let sum = 0;

  while (i < nums.length && nums[start] === nums[i]) {
    sum += nums[i];
    i++;
  }

  if (groupSumClump(i, nums, target - sum)) {
    return true;
  }

  if (groupSumClump(i, nums, target)) {
    return true;
  }

  return false;
}

/* initial attempt
function groupSumClump(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }

  if (start + 1 < nums.length && nums[start] === nums[start + 1]) {
    const end = findClumpEnd(start, nums, nums[start]);
    if (groupSumClump(end, nums, target - nums[start] * (end - start))) {
      return true;
    }

    if (groupSumClump(end, nums, target)) {
      return true;
    }
  }

  if (groupSumClump(start + 1, nums, target - nums[start])) {
    return true;
  }

  if (groupSumClump(start + 1, nums, target)) {
    return true;
  }

  return false;
}

function findClumpEnd(start, nums, val) {
  let i = start;
  while (nums[i] === val) {
    i++;
  }
  return i;
}
*/

console.log(groupSumClump(0, [2, 4, 8], 10)); // true
console.log(groupSumClump(0, [1, 2, 4, 8, 1], 14)); // true
console.log(groupSumClump(0, [2, 4, 4, 8], 14)); // false
