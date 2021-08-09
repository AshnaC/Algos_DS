class Graph {
    constructor() {
        this.graph = {};
        this.noOfNodes = 0;
    }
    addVertex(node) {
        this.graph[node] = [];
        this.noOfNodes++;
    }

    addEdge(node1, node2) {
        if (this.graph[node1] && this.graph[node2]) {
            this.graph[node1].push(node2);
            this.graph[node2].push(node1);
            return this.graph;
        } else {
            return "One or more node not found";
        }
    }

    showConnections() {
        for (let i in this.graph) {
            console.log("Node ==>", i);
            for (let k of this.graph[i]) {
                // console.log(k);
            }
        }
    }
}

const graph = new Graph();
graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addEdge("3", "1");
graph.addEdge("3", "4");
graph.addEdge("4", "2");
graph.addEdge("4", "5");
graph.addEdge("1", "2");
graph.addEdge("1", "0");
graph.addEdge("0", "2");
graph.addEdge("6", "5");
graph.showConnections();
console.log(JSON.stringify(graph.graph));
