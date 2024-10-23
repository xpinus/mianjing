/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2


    let p1 = list1;
    let p2 = list2;
    let head = new ListNode();
    let pr = head;

    while(p1 && p2) {
        if(p1.val <= p2.val) {
            pr.val = p1.val;
            p1 = p1.next;
        }else {
            pr.val = p2.val;
            p2 = p2.next;
        }

        if(p1 && p2) {
            pr.next = new ListNode();
            pr = pr.next;
        } else {
            pr.next = p1 || p2
        }

    }

    return head
};
// @lc code=end

