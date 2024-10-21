/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	const res = new ListNode()

	let p1 = l1;
	let p2 = l2;
	let pr = res;

	let over = 0;
	while(p1 && p2) {
		const val = p1.val + p2.val + over;
		over = val >= 10 ? 1 : 0;

		pr.val = val % 10;

		p1 = p1.next;
		p2 = p2.next;
		if(p1 || p2) {
			pr.next = new ListNode();
			pr = pr.next;
		}

		
	}

	let p = p1 || p2;

	while(p) {
		const val = p.val + over;
		over = val >= 10 ? 1 : 0;

		pr.val = val % 10;
		

		p = p.next;
		if(p) {
			pr.next = new ListNode();
			pr = pr.next;
		}
	}

	if(over) {
		pr.next = new ListNode(1);
	}

	return res;
};
// @lc code=end
