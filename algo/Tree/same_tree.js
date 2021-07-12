/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//  https://leetcode.com/problems/same-tree/

var isSameTree2 = function (p, q) {
    if (!p && !q) return true;
    if (p && q) {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
};

var isSameTree1 = function (p, q) {
    if (!p || !q) {
        if (!p && !q) {
            return true;
        }
        return false;
    }
    let q1 = [p];
    let q2 = [q];

    while (q1.length && q2.length) {
        let len1 = q1.length;
        let len2 = q2.length;
        if (len1 !== len2) {
            return false;
        }
        for (let i = 0; i < len1; i++) {
            let node1 = q1.shift();
            let node2 = q2.shift();
            if (node1.val !== node2.val) {
                return false;
            }
            if (
                (node1.left && !node2.left) ||
                (node2.left && !node1.left) ||
                (node1.right && !node2.right) ||
                (node2.right && !node1.right)
            ) {
                return false;
            }

            if (node1.left) {
                q1.push(node1.left);
                q2.push(node2.left);
            }

            if (node1.right) {
                q1.push(node1.right);
                q2.push(node2.right);
            }
        }
    }
    return true;
};

var isSameTree = function (p, q) {
    let queue = [[p, q]];
    while (queue.length) {
        let [node1, node2] = queue.shift();
        if (!node1 && !node2) continue;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;
        queue.push([node1.left, node2.left]);
        queue.push([node1.right, node2.right]);
    }
    return true;
};
