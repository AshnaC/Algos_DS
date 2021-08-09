// https://www.youtube.com/watch?v=bXsUuownnoQ
// https://leetcode.com/problems/graph-valid-tree/
// Given are edges of bi-directional graphs

// Check Graph is a valid tree
// - There are no cycles
// All nodes are connected

// n - number of nodes
// Adjacent edges

const validTree = (n, edges) => {
    if (!n) {
        // No nodes is valid tree
        return true;
    }

    let connect = {};
    for (let [edge1, edge2] of edges) {
        connect[edge1] = connect[edge1] || [];
        connect[edge2] = connect[edge2] || [];
        connect[edge1].push(edge2);
        connect[edge2].push(edge1);
    }

    // to track visited node to determine cyclic relation
    let visit = {};

    // Since graph is bi-directional the neighbor will have previous node always
    // It is not cyclic but the previous node
    // So we have to check that in neighbors

    const dfs = (node, prev) => {
        if (visit[node]) {
            // Cyclic
            return false;
        }
        visit[node] = true;
        for (let neighbor of connect[node]) {
            if (neighbor == prev) {
                // Not cyclic just previous due to bi-directional nature
                continue;
            }
            if (!dfs(neighbor, node)) {
                return false;
            }
        }
        return true;
    };
    // All nodes are connected is number of nodes in visit == n
    return dfs(0, -1) && Object.keys(visit).length === n;
};

validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4]
]);

// 0 - 1,2,3
//1-0,4
//2-0
//3-0
//4-1

0 - -1;
1 - 0;
0 - 1;
