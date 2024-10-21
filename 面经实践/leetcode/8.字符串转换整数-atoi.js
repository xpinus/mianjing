/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = 1;
    let status = 0;  
    let res = [];

    s = s.trimStart();

    const arr = s.split('');
    if(arr[0] === '-') {
        sign = -1;
        arr.shift()
    } else if(arr[0] === '+') {
        sign = 1;
        arr.shift()
    }


    while(arr.length) {
        const char = arr.shift();
        if(/[0-9]/.test(char)) {
            if(res.length === 0 && char === '0') continue;

            res.push(char);
        } else {
            break;
        }
    }

    if(res.length === 0) return 0;

    const resNum = sign * Number(res.join(''))

    if(resNum > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    if(resNum < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }

    return resNum
};
// @lc code=end

