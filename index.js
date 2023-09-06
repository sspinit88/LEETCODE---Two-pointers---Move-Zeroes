/**
 
Given an integer array nums,
move all 0's to the end of it while maintaining
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]


Example 2:
Input: nums = [0]
Output: [0]


Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1


SOLUTION: https://www.youtube.com/watch?v=aayNRwUN3Do&t=402s 
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const length = nums.length;
  let left = 0;
  let right = 1;

  while (right < length) {
    if (nums[left] != 0) {
      left++;
      right++;
    } else if (nums[right] === 0) {
      right++;
    } else {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]); /// [1,3,12,0,0]
moveZeroes([0]); /// [0]
moveZeroes([5, 0, 2, 3, 0, 0, 7, 8, 9]); /// [5,2,3,7,8,9,0,0,0]
