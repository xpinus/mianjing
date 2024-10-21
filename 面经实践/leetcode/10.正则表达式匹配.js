/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function (s, p) {
    
    // 构造dp[i][j]
    // 表示s(0,i)的字串和p(0,j)的字串是否匹配
    // 因为位置是从0开始的，第0个位置是空字符串 所以初始化长度是sLen + 1
    let dp = Array(s.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(p.length + 1).fill(false)
    }

    dp[0][0] = true; // 空字符串和空字符串必然匹配，也是最开始的状态
    for (let j = 1; j < p.length + 1; j++) { // *字符前至少存在一个字符因此从1开始
        if (p.charAt(j - 1) === "*") { 
            dp[0][j] = dp[0][j - 2]   // *字符的初始不匹配状态为前两个字符对应的状态，序号0对应的空字符串因此j+1
        }
    }

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < p.length + 1; j++) {
            if (p.charAt(j-1) === '.' || p.charAt(j-1) === s.charAt(i-1)) {
                dp[i][j] = dp[i - 1][j - 1]  // 当此处字符能匹配时，就看其前面的字串能否匹配上
            }

            if (p.charAt(j-1) === '*') {
                if (s.charAt(i - 1) == p.charAt(j - 2) || p.charAt(j - 2) == '.') {
                    // 要想当前位置为*时能匹配上，则有下列情况之一即可
                    // dp[i][j - 1]，p前一个字符匹配上, 即 x* 的x与s[i+1]匹配上了1次  
                    //      aba
                    //      aba*
                    // dp[i - 1][j]，s[i-1]字串匹配， x*匹配 >= 2次 ，   
                    //      abaaaa
                    //      aba*
                    dp[i][j] = (dp[i][j-2] || dp[i-1][j]  )   
                }
                else { 
                    dp[i][j] = dp[i][j - 2]  // *前的字符没有匹配上，则当此p字符规则不存在，状态由前两个字符的p(0, j-1)决定
                }
            }
        }
    }
    return dp[s.length][p.length]
};

// @lc code=end

