/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];

    nums.sort((a, b) => a - b);
    for(let i = 0; i <= nums.length - 3; i++) {
        if(nums[i] > 0) break; 
        let left = i+1;
        let right = nums.length - 1;

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if(sum == 0) {
                res.push([nums[i], nums[left], nums[right]])
                while(nums[left + 1] === nums[left]) left++;
                while(nums[right - 1] === nums[right]) right--;
                left++;
                right--;
                
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};
// @lc code=end
