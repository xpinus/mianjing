/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    const res = [];

    const len = digits.length;

    const reduce = (path, level) => {
        if(level === digits.length) return;

        const arr = map[digits[level]];
        
        for(let i=0; i<arr.length; i++) {
            const p =  path + arr[i];

            if(p.length === len) {
                res.push(p)
                continue;
            }else {
                reduce(p, level + 1);
            }
        }
    }

    reduce('', 0)


    return res;
};
// @lc code=end

