/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(let i=0; i<s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        }else {
            if(s[i] === ')') {
                const char = stack.pop();
                if(char === '(') continue;
                else {
                    return false;
                }
            }

            if(s[i] === ']') {
                const char = stack.pop();
                if(char === '[') continue;
                else {
                    return false;
                }
            }

            if(s[i] === '}') {
                const char = stack.pop();
                if(char === '{') continue;
                else {
                    return false;
                }
            }
        }
    }

    return stack.length === 0;
};
// @lc code=end

