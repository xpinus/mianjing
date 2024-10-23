/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    const h = head.next

    let pre = null;
    let p1 = head;
    let p2 = head.next
    let next = p2.next;
    while(p1 && p2) {
        p1.next = next;
        p2.next = p1;
        if(pre) {
            pre.next = p2;
        }

        pre = p1;
        p1 = next;
        p2 = next?.next;
        next = p2?.next;
    }

    return h;
};
// @lc code=end

