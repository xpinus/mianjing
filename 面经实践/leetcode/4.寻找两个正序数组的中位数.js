/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len = nums1.length + nums2.length;
    let target;
    const even = len % 2 === 0;
    if(even) {
        target = len / 2;
    }else {
        target = Math.floor(len / 2)
    }

    let index = 0;
    const arr = [];
    while(nums1.length && nums2.length) {
        if(nums1[0] <= nums2[0]) {
            arr[index] = nums1.shift();
        } else {
            arr[index] = nums2.shift();
        }

        if(index === target) {
            if(even) {
                return (arr[index] + arr[index - 1]) / 2
            } else {
                return arr[index]
            }
        }
        
        index++;
    }

    while(nums1.length || nums2.length) {
        arr[index] = nums1.length ? nums1.shift() : nums2.shift()

        if(index === target) {
            if(even) { 
                return (arr[index] + arr[index - 1]) / 2 
            } else {
                return arr[index]
            }
        }

        index++;
    }

    
};
// @lc code=end

