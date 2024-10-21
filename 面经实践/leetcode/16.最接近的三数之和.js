/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = null;
    let d = Infinity;

    nums.sort((a, b) => a - b);
    for(let i = 0; i <= nums.length - 3; i++) {
        let left = i+1;
        let right = nums.length - 1;

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const delta = sum - target;
            
            if(Math.abs(delta) < d) {
                res = sum;
                d = Math.abs(delta)
            }

            if(delta == 0)
                return sum
            else if(delta < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};
// @lc code=end

