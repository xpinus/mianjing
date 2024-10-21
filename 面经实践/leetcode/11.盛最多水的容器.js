/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left=0, right=height.length - 1;

    while(left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        max = Math.max(max, w * h);

        if(height[left] <= height[right]) {
            left++;
        }
        else {
            right--;
        }

    }

    return max;
};
// @lc code=end

