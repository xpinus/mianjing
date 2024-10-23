/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l=0, r=0;
    
    for(let r=0; r<nums.length; r++) {
        if(nums[r] !== val) {
            nums[l] = nums[r];
            l++;
        }
    }

    nums.splice(l)

    return l+1;
};
// @lc code=end

