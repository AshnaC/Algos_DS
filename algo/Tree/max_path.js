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
 * @return {number}
 */

//https://leetcode.com/problems/binary-tree-maximum-path-sum/
//https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/603423/Python-Recursion-stack-thinking-process-diagram

var maxPathSum = function (root) {
    let maxVal = root.val;
    let getPath = node => {
        if (!node) {
            return 0;
        }
        let leftNode = Math.max(getPath(node.left), 0);
        let rightNode = Math.max(getPath(node.right), 0);
        // Path Value for the entire sub tree
        let fullTreeVal = node.val + leftNode + rightNode;
        maxVal = Math.max(maxVal, fullTreeVal);

        // Path Value when only one side is considered
        return node.val + Math.max(leftNode, rightNode);
    };
    getPath(root);
    return maxVal;
};
