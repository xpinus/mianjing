/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0;
    let r = 0;

    while(++r < nums.length) {
        if(nums[r] !== nums[l]) {
            l++;
            nums[l] = nums[r];
        }
    }

    nums.splice(l+1)

    return l+1;
}
removeDuplicates([1,2,3])
// @lc code=end

