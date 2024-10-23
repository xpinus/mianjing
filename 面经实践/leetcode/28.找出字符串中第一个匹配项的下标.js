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

    // KMP   
    // 前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配
    const getNext = (needle) => {
        let j=0;
        const next = [j]   // index为0是肯定没有前后缀


        // aabaaf
        for(let i=1; i<needle.length; i++) {
            while(j > 0 && needle[i] !== needle[j]) {
                j = next[j-1]
            }

            if(needle[i] === needle[j]) j++

            next[i] = j
        }
        next.pop()
        next.unshift(-1)
        return next
    }
    const next = getNext(needle)
    // console.log(next)
    let j = 0;
    // aabaabaaf
    // aabaaf
    for(let t=0; t<haystack.length; t++) {
        if(haystack[t] === needle[j]) {
            if(j === needle.length - 1) {
                return t - needle.length + 1
            }
            j++
        }
        else if(j>0) {
            j = next[j]
            t--
        }
    }

    return -1
};
// @lc code=end

