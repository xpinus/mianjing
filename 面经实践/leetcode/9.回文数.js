/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s = x + '';
    let left = 0, right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right])
            return false;

        left++;
        right--;
    }

    return true
};
// @lc code=end

