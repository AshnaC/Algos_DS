//https://leetcode.com/problems/maximum-depth-of-binary-tree/

const maxDepth1 = root => {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const maxDepth2 = root => {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let count = 0;

    while (queue.length) {
        let len = queue.length;
        // child nodes of each parent node should be only counted as 1
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        count++;
    }
    return count;
};

//DFS
var maxDepth = function (root) {
    let max = 0;
    const dfs = (node, count) => {
        if (!node) {
            return 0;
        }
        max = Math.max(max, count);

        dfs(node.left, count + 1);
        dfs(node.right, count + 1);
    };
    dfs(root, 1);
    return max;
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
