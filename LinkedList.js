let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 6,
                next: null
            }
        }
    }
};

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value, null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        this.printList();
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
        this.printList();
    }

    printList() {
        let arrList = [];
        let node = this.head;
        while (node) {
            arrList.push(node.value);
            node = node.next;
        }
        console.log(arrList);
    }

    insert(idx, value) {
        if (idx == 0) {
            this.prepend(value);
            return;
        }
        let prevNode = this.head;
        for (let i = 0; i < idx - 1; i++) {
            prevNode = prevNode.next;
        }
        const newNode = new Node(value, prevNode.next);
        prevNode.next = newNode;
        this.length++;
        this.printList();
    }

    remove(idx) {
        if (idx === 0) {
            this.head = this.head.next;
            this.printList();
            return;
        }
        let prevNode = this.head;
        for (let i = 0; i < idx - 1; i++) {
            prevNode = prevNode.next;
        }
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--;
        this.printList();
    }

    reverse() {
        this.tail = this.head;
        let first = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head = first;
        this.tail.next = null;
        this.printList();
    }
}

class Node {
    constructor(value, next) {
        this.next = next;
        this.value = value;
    }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(6);
linkedList.prepend(100);
linkedList.insert(3, 11);
// linkedList.remove(0)
// linkedList.remove(1)
linkedList.reverse();

class DoublyLinkedList {
    constructor(value) {
        this.head = new DoubleNode(value, null, null);
        this.tail = this.head;
        this.length = 1;
        this.printList();
    }
    append(value) {
        const newNode = new DoubleNode(value, this.tail, null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        this.printList();
    }

    prepend(value) {
        const newNode = new DoubleNode(value, null, this.head);
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        this.printList();
    }

    insert(idx, value) {
        if (idx === 0) {
            this.prepend(value);
            return;
        }
        let currentNode = this.head;
        for (let i = 0; i < idx; i++) {
            currentNode = currentNode.next;
        }
        const newNode = new DoubleNode(value, currentNode.prev, currentNode);
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
        this.length++;
        this.printList();
    }

    remove(idx) {
        if (idx == 0) {
            this.removeHead();
            return;
        }
        let currentNode = this.head;
        for (let i = 0; i < idx; i++) {
            currentNode = currentNode.next;
        }
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        this.length--;
        this.printList();
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        this.printList();
    }

    reverse() {
        let current = this.head;
        this.tail = this.head;
        while (true) {
            const next = current.next;
            const prev = current.prev;
            current.prev = next;
            current.next = prev;
            if (!next) break;
            current = next;
        }
        this.head = current;
        this.printList();
    }

    printList() {
        let arrElts = [];
        let node = this.head;
        while (node) {
            arrElts.push(node.value);
            node = node.next;
        }
        console.log(arrElts);
    }
}

class DoubleNode {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

const doubleLinkedList = new DoublyLinkedList(100);
doubleLinkedList.append(101);
doubleLinkedList.prepend(102);
doubleLinkedList.insert(0, 111);
doubleLinkedList.insert(1, 1111);
doubleLinkedList.remove(1);
doubleLinkedList.remove(0);
doubleLinkedList.reverse();
