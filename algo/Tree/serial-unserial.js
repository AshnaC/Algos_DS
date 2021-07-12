/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/submissions/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let result = [];

    while (queue.length) {
        // console.log('queue',queue )
        let node = queue.shift();
        result.push(node ? node.val : null);
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    // console.log(result)
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data.length) {
        return null;
    }
    let root = new TreeNode(data[0]);
    let queue = [root];
    let i = 1;
    while (i < data.length) {
        let node = queue.shift();
        if (data[i] !== null) {
            let leftNode = new TreeNode(data[i]);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (data[i + 1] !== null) {
            let rightNode = new TreeNode(data[i + 1]);
            node.right = rightNode;
            queue.push(rightNode);
        }
        i = i + 2;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// DFSS

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function (root) {
    if (!root) {
        return [];
    }
    let result = [];

    const dfs = node => {
        if (!node) {
            result.push("null");
        } else {
            result.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
    };
    dfs(root);
    return result.join(",");
};

var deserialize = function (data) {
    if (!data || !data.length) {
        return null;
    }
    const vals = data.split(",");
    if (!vals.length) {
        return null;
    }
    let i = 0;
    const dfs = () => {
        let root = null;
        if (vals[i] != "null") {
            root = new TreeNode(vals[i]);
            i = i + 1;
            root.left = dfs();
            root.right = dfs();
        } else {
            i = i + 1;
        }
        return root;
    };

    const node = dfs();

    return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
