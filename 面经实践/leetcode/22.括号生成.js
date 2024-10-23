/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    const path = ['('];

    const back = (path, left, right) => {
        
        if(path.length === n*2) {
            res.push(path.join(''));
            return;
        }

        const addLeft = () => {
            if(left < n) {
                path.push('(');
                back(path, left + 1, right);
                path.pop();
            }
        }

        const addRight = () => {
            if(left > right && right < n) {   // 只有在（数量大于)数量时才有可能添加)
                path.push(')');
                back(path, left, right + 1);
                path.pop();
            }
        }
        
        addLeft()
        addRight()
    }

    back(path, 1, 0)

    return res;
};

generateParenthesis(3)
// @lc code=end

