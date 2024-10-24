/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0)
        return 0;

    const getNext = (str) => {
        let j = 0;
        const next = [j];

        for(let i=1; i<str.length; i++) {

            while(j > 0 && str[i] !== str[j]) {
                j = next[j-1];
            }

            if(str[j] === str[i]) j++;

            next[i] = j;
        }

        next.unshift(-1);
        next.pop();

        return next;
    }

    const next = getNext(needle)

    console.log(next);

    let j=0;
    for(let i=0; i<haystack.length; i++) {
        if(haystack[i] === needle[j]) {
            // if(i + needle.length > haystack.length) {
            //     return i;
            // }
            j++;

            if(j === needle.length) {
                return i - needle.length + 1;
            }
        } else if(j>0) {
            j = next[j];
            i--;
        }
    }
    
    return -1
};

strStr('mississippi', 'pi')
// @lc code=end

