/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    // 特殊情况
    if (!dividend) return 0;
    const [MIN, MAX] = [-(2 ** 31), 2 ** 31 - 1];
    if (dividend === MIN && divisor === -1) return MAX;
    if (dividend === MIN && divisor === 1) return MIN;

    const sign = (dividend ^ divisor) < 0;

    let [a, b] = [Math.abs(dividend), Math.abs(divisor)];

    let res=0;
    for(let i=31; i>= 0; i--) {
        if(a >>> i >= b) {   // >>> 为无符号位移，>>为有符号位移
            res += 1 << i;
            a -= b << i;
        }
    }

    return sign ? -res : res;

};
// @lc code=end

