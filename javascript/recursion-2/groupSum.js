/* https://codingbat.com/prob/p145416

Given an array of ints, is it possible to choose a group of some of the ints, such that the 
group sums to the given target? This is a classic backtracking recursion problem. 
Once you understand the recursive backtracking strategy in this problem, you can use the 
same pattern for many problems to search a space of choices. Rather than looking at the 
whole array, our convention is to consider the part of the array starting at index start and 
continuing to the end of the array. The caller can specify the whole array simply by passing 
start as 0. No loops are needed -- the recursive calls progress down the array.

groupSum(0, [2, 4, 8], 10) → true
groupSum(0, [2, 4, 8], 14) → true
groupSum(0, [2, 4, 8], 9) → false

*/

/*
  Key Insight: 
    Get creative on figuring how to calculate the desired outcome.
    
    For example, we can subtract nums[start] from target at each recursive
    call where we INCLUDE the value and if target becomes 0, we know we have 
    a combo of numbers that sum to the target value.
*/

function groupSum(start, nums, target) {
  if (start >= nums.length) {
    return target === 0;
  }

  if (groupSum(start + 1, nums, target - nums[start])) {
    return true;
  }

  if (groupSum(start + 1, nums, target)) {
    return true;
  }

  return false;
}

console.log(groupSum(0, [2, 4, 8], 10)); // true
console.log(groupSum(0, [2, 4, 8], 14)); // true
console.log(groupSum(0, [2, 4, 8], 9)); // false

/* get all combos of numbers using auxiliary array
function groupSum(start, nums, combos) {
  if (start === nums.length) {
    console.log(combos.join(''));
    return;
  }

  groupSum(start + 1, nums, combos);
  combos.push(nums[start]);
  groupSum(start + 1, nums, combos);
  combos.pop();
}

groupSum(0, [2, 4, 8], []);
*/
