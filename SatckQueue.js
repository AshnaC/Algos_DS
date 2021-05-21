class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        // see top node
        return this.top;
    }
    push(value) {
        const newNode = new Node(value, this.top);
        this.top = newNode;
        if (!this.bottom) {
            this.bottom = newNode;
        }
        this.length++;
        this.printList();
    }

    pop() {
        const topNode = this.top;
        this.top = this.top.next;
        this.length--;
        return topNode.value;
        this.printList();
    }

    printList() {
        let node = this.top;
        let eltArr = [];
        while (node) {
            eltArr.push(node.value);
            node = node.next;
        }
        console.log(eltArr);
    }

    isEmpty() {
        return this.length === 0;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const stack = new Stack();
stack.isEmpty();
stack.push("hi");
stack.peek();
console.log(stack);

class StackArr {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    push(value) {
        this.data.push(value);
        this.length++;
    }
    pop() {
        this.data.pop();
        this.length--;
    }
    peek() {
        return this.data[this.length - 1];
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first.value;
    }
    enqueue(value) {
        const newNode = new Node(value, null);
        if (!this.last) {
            this.first = newNode;
        } else {
            this.last.next = newNode;
        }
        this.printList();
        this.last = newNode;
        this.length++;
    }

    dequeue() {
        const firstNode = this.first;
        this.first = this.first.next;
        // this.printList()
        this.length--;
        return firstNode.value;
    }

    printList() {
        let node = this.first;
        let eltArr = [];
        while (node) {
            eltArr.push(node.value);
            node = node.next;
        }
        console.log(eltArr);
    }
}

const que = new Queue();
que.enqueue("Hi");
que.enqueue("Bye");
que.enqueue("Same");
que.dequeue();
que.peek();

class QueueStacks {
    constructor() {
        this.front = [];
        this.back = [];
        this.length = 0;
    }

    enqueue(value) {
        while (this.front.length) {
            this.back.push(this.front.pop());
        }
        this.back.push(value);
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.length) return null;
        while (this.back.length) {
            this.front.push(this.back.pop());
        }
        this.front.pop();
        this.length--;
        return this;
    }
}

const qs = new QueueStacks();
qs.enqueue(100);
qs.enqueue(1001);
qs.enqueue(104);
qs.dequeue();
qs.dequeue();
