/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

//https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Get in order traversal
// kth smallest element is the k-1th index of in order array

var kthSmallest = function (root, k) {
    let list = [];
    const inOrder = node => {
        if (node) {
            inOrder(node.left);
            list.push(node.val);
            inOrder(node.right);
        }
        if (list[k - 1] != undefined) {
            return list[k - 1];
        }
    };
    inOrder(root);
};

var kthSmallest2 = function (root, k) {
    if (!root) {
        return null;
    }
    let list = [];
    let stack = [];
    while (root || stack.length) {
        // Push all the lefts first
        while (root) {
            stack.push(root);
            root = root.left;
        }
        // Take the last left
        let node = stack.pop();
        list.push(node.val);
        if (list[k - 1] != undefined) {
            return list[k - 1];
        }

        // Set root to push right values to stack
        // The top while loop will then push left of all right values
        console.log("list", list);
        root = node.right;
    }
    // return list[k-1]
};

var kthSmallest = function (root, k) {
    let left = root;

    let stack = [];
    let list = [];

    while (left) {
        stack.push(left);
        left = left.left;
    }

    while (stack.length) {
        let elt = stack.pop();
        list.push(elt.val);

        let right = elt.right;
        while (right) {
            stack.push(right);
            right = right.left;
        }
    }

    return list[k - 1];
};