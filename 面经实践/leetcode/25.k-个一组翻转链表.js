/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {

    const hair = new ListNode();
    hair.next = head;
    let preNode = hair;
    let nextNode = null;

    const isMeetK = (h) => {
        let cnt = 0;
        while(h) {
            cnt++;
            if(cnt === k) return h;

            h = h.next;
        }

        return null;
    }

    // 根据链表头尾反转链表
    const reverseList = (head, tail) => {
        let prev = tail.next;
        let p = head;
        while(prev !== tail) {
            const nex = p.next;
            p.next = prev;
            
            prev = p;
            p = nex;
        }

        return [tail, head]
    }

    let kHead = head;
    let kTail = null;
    while(kTail = isMeetK(kHead)) {
        nextNode = kTail.next;

        // 反转以h开始的k个节点;
        const [head, tail] = reverseList(kHead, kTail)
        preNode.next = head;
        tail.next = nextNode;

        preNode = tail;
        kHead = tail.next;
    }
    

    return hair.next;
    

};
// @lc code=end

