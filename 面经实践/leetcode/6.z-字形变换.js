/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length <= numRows || numRows == 1) {
        return s
    }

    const rows = new Array(numRows).fill(0).map(item => [])

    const loop = numRows + (numRows - 2); // 一个loop对应的笔画： |/
    for(let i=0; i<s.length; i++) {

        const place = i % loop;
        if(place < numRows) {
            rows[place].push(s[i]);
        } else {
            rows[numRows  - (place + 1) % numRows - 1].push(s[i])
        }
    }


    return rows.reduce((pre, cur) => {
        console.log(cur.join(''));
        
        return pre += cur.join('');
    }, '')

};

convert("PAYPALISHIRING", 4)
// @lc code=end

