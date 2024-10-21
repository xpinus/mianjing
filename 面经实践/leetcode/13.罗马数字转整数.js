/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // I	1
    // IV   4
    // V	5
    // IX   9
    // X	10
    // XL   40
    // L	50
    // XC   90
    // C	100
    // CD   400
    // D	500
    // CM   900
    // M	1000

    // 排除双字符的特殊情况
    const arr = s.split('');
    let res = 0;
    const indexCM = arr.join('').indexOf('CM');
    if(indexCM > -1) {
        res += 900;
        arr.splice(indexCM, 2);
    }

    const indexCD = arr.join('').indexOf('CD');
    if(indexCD > -1) {
        res += 400;
        arr.splice(indexCD, 2);
    }

    const indexXC = arr.join('').indexOf('XC');
    if(indexXC > -1) {
        res += 90;
        arr.splice(indexXC, 2);
    }

    const indexXL = arr.join('').indexOf('XL');
    if(indexXL > -1) {
        res += 40;
        arr.splice(indexXL, 2);
    }

    const indexIX = arr.join('').indexOf('IX');
    if(indexIX > -1) {
        res += 9;
        arr.splice(indexIX, 2);
    }

    const indexIV = arr.join('').indexOf('IV');
    if(indexIV > -1) {
        res += 4;
        arr.splice(indexIV, 2);
    }

    // 遍历单字符，累加
    for(let i=0; i<arr.length; i++) {
        switch(arr[i]) {
            case 'M': 
                res += 1000;
                break;
            case 'D':
                res += 500;
                break;
            case 'C':
                res += 100;
                break;
            case 'L':
                res += 50;
                break;
            case 'X':
                res += 10;
                break;
            case 'V':
                res += 5;
                break;
            case 'I':
                res += 1;
                break;
        }
    }

    return res;
};
// @lc code=end

