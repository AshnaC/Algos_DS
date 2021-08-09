// https://www.youtube.com/watch?v=6kTZYvNNyps
//https://leetcode.com/problems/alien-dictionary/

const deductAlienLanguage = (words) => {
    let relations = {};
    for (let i = 0; i < words.length-1; i++) {
        let w1 = words[i];
        let w2 = words[i + 1];
        let minLen = Math.min(w1.length, w2.length);
        for (let j = 0; j < minLen; j++){
            if (w1[j] !== w2[j]) {
                relations[w1[j]] = relations[w1[j]] || new Set();
                relations[w1[j]].add(w2[j])
                break;
            }
        }
    }
    let result = [];
    // To check for cyclic relation
    let visited = {}

    // visited[char] true means the same node is visited in the same map
    // It implies cyclic relation
    // Hence the given relation is invalid

    // visited[char] false means the map from that char is visited once 
    // It is not in the given cycle but already pushed to result
    // We dont need to push that to our result

    // result will be a preorder list meaning - the endmost items are pushed first
    // Pushing after neighbour iteration - children are pushed first
    // We need to reverse this array to get list from start
    // Refer youtube video

    const dfs = (char) => {
        if (visited[char] !== undefined) {
            return visited[char];
        }
        visited[char] = true;
        if (relations[char]) {
            for (let neighbor of relations[char].values()) {
                if (dfs(neighbor)) {
                    // Is cyclic and invalid
                    return true;
                }
            }
        }
        visited[char] = false;
        result.push(char);
        
    }

    for (let c in relations) {
        if (dfs(c)) {
            return "";
        }
    }

    return result.reverse().join("")

}

const val = deductAlienLanguage(["wrt", "wrf", "er", "ett", "rftt"])
console.log(val)