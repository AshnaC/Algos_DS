/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/submissions/

//  If both conditions does not satisfy, it means we have found the common ancestor
// Recursion
var lowestCommonAncestor = function (root, p, q) {
    if (p.val > root.val && q.val > root.val) {
        // Go to right tree
        return lowestCommonAncestor(root.right, p, q);
    }
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};

// Iteration
var lowestCommonAncestor = function (root, p, q) {
    let node = root;
    while (node) {
        if (p.val > node.val && q.val > node.val) {
            // Go to right tree
            node = node.right;
        } else if (p.val < node.val && q.val < node.val) {
            node = node.left;
        } else {
            return node;
        }
    }
};
