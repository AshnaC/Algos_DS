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
 * @return {number[][]}
 */

// https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let result = [[root.val]];
    let queue = [root];
    while (queue.length) {
        // For each level - 3 layers
        let len = queue.length;
        let sub = [];
        for (let i = 0; i < len; i++) {
            // For all elements in a layer
            let node = queue.shift();
            if (!node.left && !node.right) {
                continue;
            }
            if (node.left) {
                queue.push(node.left);
                sub.push(node.left.val);
            }
            if (node.right) {
                queue.push(node.right);
                sub.push(node.right.val);
            }
        }
        sub.length && result.push(sub);
    }

    return result;
};

//DFS
var levelOrder = function (root) {
    if (!root) {
        return [];
    }

    let result = [[root.val]];

    const dfs = (node, level) => {
        if (node) {
            if (result[level]) {
                result[level].push(node.val);
            } else {
                result[level] = [node.val];
            }
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        }
    };

    dfs(root.left, 1);
    dfs(root.right, 1);
    return result;
};
