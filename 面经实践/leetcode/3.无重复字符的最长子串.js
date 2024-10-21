/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if(s.length === 0) return 0;
	let maxLen = 1;
	let left=0, right=0;

	const sub = new Set([])

	while(right < s.length) {
		if(!sub.has(s[right])) {
			sub.add(s[right])
			right++
		} else {
			maxLen = Math.max(right - left, maxLen);
			sub.delete(s[left])
			left++;
		}
	}

	maxLen = Math.max(sub.size, maxLen);

	return maxLen;
};
// @lc code=end
