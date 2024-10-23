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
        if(this.heap[parentIndex] && ( this.heap[parentIndex] > this.heap[index] )) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] && this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[index]) {
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

const test = [3,4,6,7,8,3,1]

const heap = new MiniHeap();
for(let i=0; i<test.length; i++) {
    heap.insert(test[i])
}


const res = []
while(heap.size()) {
    res.push(heap.pop())
}
console.log(res);
