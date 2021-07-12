// https://leetcode.com/problems/validate-binary-search-tree/submissions/

var isValidBST = function (root) {
    if (!root) {
        return true;
    }
    return isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

const isValid = (node, lowerVal, upperVal) => {
    if (!node) {
        return true;
    }
    return (
        node.val > lowerVal &&
        node.val < upperVal &&
        isValid(node.left, lowerVal, node.val) &&
        isValid(node.right, node.val, upperVal)
    );
};

// Or
// Make in order array
// Check if prev array elt less than current
var isValidBST2 = function (root) {
    let list = [];
    let valid = true;

    const inorder = node => {
        if (node) {
            inorder(node.left);
            list.push(node.val);
            let len = list.length;
            if (list[len - 1] <= list[len - 2]) {
                valid = false;
            }
            inorder(node.right);
        }
    };

    inorder(root);
    return valid;
};
