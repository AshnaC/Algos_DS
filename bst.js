// Is valid BST

var isValidBST = function (root) {
    let tree = makeTree(root, {});
    return isValid(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

function isValid(node, min, max) {
    if (node) {
        if (node.value >= max || node.value <= min) {
            return false;
        } else {
            return isValid(node.left, min, node.value) && isValid(node.right, node.value, max);
        }
    }
    return true;
}

function makeTree(root, tree) {
    let queue = [];
    let rootNode = new Node(root.shift());
    tree = rootNode;
    queue.push(rootNode);
    while (root.length) {
        let node = queue.shift();
        let leftVal = root.shift();
        let rightVal = root.shift();
        if (leftVal) {
            node.left = new Node(leftVal);
            queue.push(node.left);
        }
        if (rightVal) {
            node.right = new Node(rightVal);
            queue.push(node.right);
        }
    }
    return tree;
}

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const isValidVal = isValidBST([1, -1], {});
