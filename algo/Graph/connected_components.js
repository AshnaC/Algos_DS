const connectedCounts = (n, edges) => {
    let connect = {};
    for (let [edge1, edge2] of edges) {
        connect[edge1] = connect[edge1] || [];
        connect[edge2] = connect[edge2] || [];
        connect[edge1].push(edge2);
        connect[edge2].push(edge1);
    }

    // To track current loop - to check acyclic
    let visiting = {};

    // to keep track o f all nodes visited no to double count while iterating connect
    let visited = {};

    const dfs = (node, prev) => {
        if (visiting[node]) {
            //cyclic
            return false;
        }
        visiting[node] = true;

        for (let neighbor of connect[node]) {
            if (neighbor == prev) {
                continue;
            }
            if (!dfs(neighbor, node)) {
                return false;
            }
        }
        visiting[node] = false;
        visited[node] = true;
        return true;
    };

    let count = 0;

    for (let part in connect) {
        if (!visited[part]) {
            if (!dfs(part, -1)) {
                // cyclic
                return 0;
            }
            count++;
        }
    }

    return count;
};

let a = connectedCounts(5, [
    [0, 1],
    [1, 2],
    [3, 4]
]);

console.log(a);

//https://www.youtube.com/watch?v=8f1XPm4WOUc
// Union - Find
// We reduce the count of nodes when a union take place
// Find is to retrieve the top most parent of a node
// We add elements to their top most parent -
// so we can only have one connection always even if there is direct or child connection
// Since we are finding the number of graphs

// Start with 2 arrays
// Parent - top most parent of each element - started as the same index
// Rank - Number of children in that parent - started as 1

const connectedElements = (n, edges) => {
    let parent = [];
    let rank = [];
    for (let i = 0; i < n; i++) {
        parent.push(i);
        rank.push(1);
    }

    const findParent = node => {
        let par = node;
        // Till cannot move up to another parent
        while (par !== parent[node]) {
            // Updating other elements parent to top parent
            // If that connection is not made yet
            parent[node] = parent[parent[node]];
            par = parent[node];
        }
        return par;
    };

    const unionEdges = (node1, node2) => {
        let p1 = findParent(node1);
        let p2 = findParent(node2);

        if (p1 == p2) {
            // Already connected
            return 0;
        }
        // Check rank to see where the connection is to be made

        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p2] = rank[p2] + rank[p1];
        } else {
            parent[p1] = p2;
            rank[p1] = rank[p1] + rank[p2];
        }
        // One connection made
        return 1;
    };

    let count = n;

    for (let [edge1, edge2] of edges) {
        count = count - unionEdges(edge1, edge2);
    }
    return count;
};

let b = connectedElements(5, [
    [0, 1],
    [1, 2],
    [3, 4]
]);

console.log(b);
