/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num 1 ~ 3999
 * @return {string}
 */
var intToRoman = function(num) {
    let res = ''

    // 千
    let cnt = Math.floor(num / 1000)
    while(cnt-- > 0) {
        res += 'M';
    }


    const render = (count, ten, five, one) => {
        let s = '';

        if(count === 9) {
            s += one + ten;
            count -= 9;
        }
        else if (count >= 5 ) {
            s += five
            count -= 5
        }
        else if(count === 4) {
            s += one + five;
            count -= 4;
        }
        while(count-- > 0) {
            s += one;
        } 

        return s
    }

    // 百
    num = num % 1000;
    cnt = Math.floor(num / 100)
    res += render(cnt, 'M', 'D', 'C')

    // 十
    num = num % 100;
    cnt = Math.floor(num / 10);
    res += render(cnt, 'C', 'L', 'X')

    // 个
    num = num % 10;
    cnt = num;
    res += render(cnt, 'X', 'V', 'I')

    // I	1
    // V	5
    // X	10
    // L	50
    // C	100
    // D	500
    // M	1000

    return res;
};
// @lc code=end

