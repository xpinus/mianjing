/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    if(len < 2) {
        return s;
    }

    let res='';


    /**
     * 中心扩散法
     */ 
    var expandHuiWen = (left, right) => {
        while(left >= 0 && right < len && s[left] === s[right] ) {
            left--;
            right++;
        }

        if(right - left - 1 > res.length) {
            res = s.slice(left+1, right)
        }
    }

    for(let i=0; i < s.length; i++) {
        expandHuiWen(i, i);
        expandHuiWen(i, i+1);
    }

    return res
};
// @lc code=end

