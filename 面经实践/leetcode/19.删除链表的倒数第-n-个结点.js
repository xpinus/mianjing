/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const nodes = []
    let p = head;
    while(p) {
        nodes.push(p);
        p = p.next;
    }

    // 去除要删除节点的上一个节点
    const pre = nodes[nodes.length - n - 1]
    if(!pre) {
        // 要删除的是头节点
        return head.next;
    }else {
        pre.next = pre.next.next;
    }


    return head;
};
// @lc code=end

