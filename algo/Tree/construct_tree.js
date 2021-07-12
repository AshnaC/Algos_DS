// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
//https://www.youtube.com/watch?v=ihj4IQGZ2zc

// First element of pre-order will always be the root node
// Every thing left to prr-order[0] in in-order array will be in left tree
// Every thing right to prr-order[0] in in-order will be in right tree
// Do this recursively

// Each new pre order array for each iteration will have count - index

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    let root = new TreeNode(preorder[0]);
    let rootIndex = inorder.findIndex(elt => elt === preorder[0]);
    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
    return root;
};
