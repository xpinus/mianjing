/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pre = '';

    strs.sort((a, b) => a.length - b.length);  // 按长度进行排序，因为最长公共前缀不可能大于最短的字符串长度
    
    const s = strs[0];
    
    for(let i=0; i<s.length; i++) {

        for(let j=1; j<strs.length; j++) {
            if(strs[j][i] !== s[i])
                return pre;
        }

        pre += s[i];
    }

    return pre;
};
// @lc code=end

