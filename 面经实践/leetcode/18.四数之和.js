/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * 就是将4数之和转换为3数之和，3数之和就是要转换为2数之和，将问题降级
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4) return [];

    var threeSum = function(nums, target) {
        const res = [];
    
        for(let i = 0; i <= nums.length - 3; i++) {
            let left = i+1;
            let right = nums.length - 1;
    
            if(i > 0 && nums[i] === nums[i - 1]) continue;
    
            while(left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if(sum == target) {
                    res.push([nums[i], nums[left], nums[right]])
                    while(nums[left + 1] === nums[left]) left++;
                    while(nums[right - 1] === nums[right]) right--;
                    left++;
                    right--;
                    
                } else if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    
        return res;
    };

    let res = [];
    nums.sort((a,b) => a - b);
    
    for(let i=0; i<nums.length; i++) {

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        const arr = threeSum(nums.slice(i+1, nums.length), target - nums[i]);

        arr.forEach(item => {
            item.unshift(nums[i])
            res.push(item)
        })
    }


    return res;
};

fourSum([2,2,2,2,2], 8)
// @lc code=end

