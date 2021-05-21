const traverse = tree => {
    let elts = [];
    if (tree) {
        elts.push(tree.value);
        if (tree.right) {
            let rightElts = traverse(tree.right);
            elts = elts.concat(rightElts);
        }
        if (tree.left) {
            let leftElts = traverse(tree.left);
            elts = elts.concat(leftElts);
        }
    }
    return elts;
};
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
            if (node.value > value) {
                if (node.left) {
                    node = node.left;
                } else {
                    node.left = newNode;
                    break;
                }
            } else if (value > node.value) {
                if (node.right) {
                    node = node.right;
                } else {
                    node.right = newNode;
                    break;
                }
            } else {
                return "Value Exists";
            }
        }
        return this;
    }

    lookup(value) {
        let node = this.root;

        while (node) {
            if (node.value === value) {
                return node;
            }
            if (node.value > value) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return "Not Found";
    }

    remove(value) {}
}

const bst = new BinarySearchTree();
bst.insert(100);
bst.insert(150);
bst.insert(99);
bst.insert(12);
bst.lookup(150);
// console.log(bst)
const elts = traverse(bst.root);
// console.log('elts',elts)
JSON.stringify(bst.root);

//https://visualgo.net/en/bst
// Remove - https://repl.it/@aneagoie/Data-Structures-Trees
