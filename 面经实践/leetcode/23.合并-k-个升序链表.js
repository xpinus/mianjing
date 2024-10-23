/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 去除所有链表的值，从小到大排序，重构链表
    // return lists.reduce((p, n) => {
    //     while (n) {
    //         p.push(n), n = n.next
    //     }
    //     return p
    // },[]).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)   // 从右向左累加正好构成链表

    // 最小堆
    class MiniHeap {

        heap = [];

        getParentIndex(index) {
            return (index - 1) >> 1;
        }

        getLeftIndex(index) {
            return index * 2 + 1;
        }

        getRightIndex(index) {
            return index * 2 + 2;
        }

        swap(index1, index2) {
            const temp = this.heap[index1];
            this.heap[index1] = this.heap[index2];
            this.heap[index2] = temp;
        }

        shiftUp(index) {
            if(index === 0) return;

            const parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex] && ( this.heap[parentIndex].val > this.heap[index].val )) {
                this.swap(parentIndex, index);
                this.shiftUp(parentIndex);
            }
        }

        shiftDown(index) {
            const leftIndex = this.getLeftIndex(index);
            const rightIndex = this.getRightIndex(index);
            if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
                this.swap(leftIndex, index);
                this.shiftDown(leftIndex);
            }
            if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
                this.swap(rightIndex, index);
                this.shiftDown(rightIndex);
            }
        }

        insert(val) {
            this.heap.push(val);

            this.shiftUp(this.heap.length - 1)
        }

        pop() {
            if(this.heap.length <= 1) return this.heap.shift();
            
            const top = this.heap[0];
            this.heap[0] = this.heap.pop()
            this.shiftDown(0)

            return top;
        }

        size() {
            return this.heap.length;
        }
    }

    const heap = new MiniHeap();

    lists.forEach(item => {
        while(item) {
            heap.insert(item);
            item = item.next;
        }
    })


    const res = new ListNode();
    let p = res;
    while(heap.size()) {
        p.next = heap.pop();
        p = p.next;
    }

    p.next = null;

    return res.next;

};
// @lc code=end

