/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0) return 0;
    let res = 0;

    const sign = x > 0 ? 1 : -1;
    const arr = (Math.abs(x) + '').split('').reverse();
    while(arr[0] == '0') {
        arr.shift();
    }

    res = Number(arr.join('')) * sign;

    return (res < Math.pow(2, 31) - 1 && res > -Math.pow(2, 31)) ? res : 0;
};
// @lc code=end

