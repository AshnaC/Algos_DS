// https://leetcode.com/problems/clone-graph/
// DFS

/**
 * @param {Node} node
 * @return {Node}
 */

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors || [];
}

var cloneGraph = function (graph) {
    let map = {};
    let traverse = node => {
        if (!node) {
            return null;
        }
        if (!map[node.val]) {
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(traverse);
        }
        return map[node.val];
    };

    return traverse(graph);
};

// BFS

/**
 * @param {Node} node
 * @return {Node}
 */

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors || [];
}

var cloneGraph = function (graph) {
    if (!graph) {
        return null;
    }
    let map = {};
    let queue = [graph];
    let newGraph = new Node(graph.val);
    map[graph.val] = newGraph;

    while (queue.length) {
        let node = queue.shift();
        let newNode = map[node.val] || new Node(node.val);
        for (let neighbor of node.neighbors) {
            let ne = map[neighbor.val] || new Node(neighbor.val);
            newNode.neighbors.push(ne);
            if (!map[neighbor.val]) {
                // The value is already covered
                queue.push(neighbor);
            }
            map[neighbor.val] = ne;
        }
        map[node.val] = newNode;
    }
    return newGraph;
};
