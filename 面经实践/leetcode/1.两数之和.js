/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) { 
		const cur = nums[i];
		const delta = target - cur;

		if(map.has(delta)) {
			return [i, map.get(delta)]
		}

		map.set(cur, i)
	}
};
// @lc code=end
