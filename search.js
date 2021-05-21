//BINARY sEARCH FOR Sorted array
function searchItem(arr, item) {
    console.log(arr);
    if (arr.length == 1) {
        if (arr[0] == item) {
            return "item Found";
        }
        return "None";
    }
    const middle = Math.ceil(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);
    if (item >= right[0]) {
        return searchItem(right, item);
    } else {
        return searchItem(left, item);
    }
}

// searchItem([1,2,10,3].sort((a,b)=> a-b),3)

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value, null, null);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let node = this.root;
        while (node) {
            if (node.value < value) {
                if (!node.right) {
                    node.right = newNode;
                    break;
                }
                node = node.right;
            } else if (node.value > value) {
                if (!node.left) {
                    node.left = newNode;
                    break;
                }
                node = node.left;
            }
        }
        // node = newNode
        return this;
    }

    lookup(value) {
        let node = this.root;
        while (node) {
            if (node.value == value) {
                return node;
            }
            if (value > node.value) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return "value not found";
    }

    bredthFirstSearch() {
        let list = [];
        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            // console.log(queue)
            list.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return list;
    }
    bredthFirstSearchRecurse() {
        let list = [];
        let queue = [this.root];
        return this.bfsRecurse(queue, list);
    }

    bfsRecurse(queue, list) {
        if (!queue.length) {
            return list;
        }
        let node = queue.shift();
        list.push(node.value);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
        return this.bfsRecurse(queue, list);
    }

    dfsInorder() {
        // Gives in order
        return this.traverseInorder(this.root, []);
    }

    traverseInorder(node, list) {
        if (node.left) {
            //Go throght left
            this.traverseInorder(node.left, list);
        }
        // When no more left, push the value
        list.push(node.value);
        if (node.right) {
            this.traverseInorder(node.right, list);
        }
        return list;
    }

    dfsPreorder() {
        // Gives in order of push
        return this.traversePreOrder(this.root, []);
    }

    traversePreOrder(node, list) {
        list.push(node.value);
        if (node.left) {
            this.traversePreOrder(node.left, list);
        }
        if (node.right) {
            this.traversePreOrder(node.right, list);
        }
        return list;
    }

    dfsPostOrder() {
        return this.traversePostOrder(this.root, []);
    }

    traversePostOrder(node, list) {
        if (node.left) {
            this.traversePostOrder(node.left, list);
        }
        if (node.right) {
            this.traversePostOrder(node.right, list);
        }
        list.push(node.value);
        return list;
    }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(170);

// bst.lookup(15)
// bst.bredthFirstSearch()
// bst.bredthFirstSearchRecurse()
// bst.dfsInorder()
// bst.dfsPreorder()
// bst.dfsPostOrder()

// console.log(JSON.stringify(bst.root))
