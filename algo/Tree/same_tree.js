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

var isSameTree = function (p, q) {
    const dfs = (node1, node2) => {
        if (!node1 && !node2) {
            return true;
        }
        if (!node1 || !node2) {
            return false;
        }

        return node1.val === node2.val && dfs(p.left, q.left) && dfs(p.right, q.right);
    };

    return dfs(p, q);
};

var isSameTree = function (p, q) {
    let que1 = [p];
    let que2 = [q];

    while (que1.length) {
        let node1 = que1.shift();
        let node2 = que2.shift();
        if (!node1 && !node2) {
            continue;
        }
        if (!node1 || !node2) {
            return false;
        }
        if (node1.val === node2.val) {
            que1.push(node1.left);
            que2.push(node2.left);
            que1.push(node1.right);
            que2.push(node2.right);
        } else {
            return false;
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
