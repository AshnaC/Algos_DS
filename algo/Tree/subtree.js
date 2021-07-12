// https://leetcode.com/problems/subtree-of-another-tree/submissions/

// It is subtree - If they are equal or left and right has the subroot
// it is equal if value is same and left and right is equal

var isSubtree = function (root, subRoot) {
    if (!root || !subRoot) return !root && !subRoot;
    return (
        isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    );
};

const isEqual = (n, t) => {
    if (!n || !t) return !t && !n;
    return n.val === t.val && isEqual(n.left, t.left) && isEqual(n.right, t.right);
};
