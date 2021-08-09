//https://leetcode.com/problems/pacific-atlantic-water-flow/submissions/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let atl = new Set();
    let pac = new Set();

    const row = heights.length;
    const col = heights[0].length;

    const dfs = (r, c, set, prevHeight) => {
        if (
            set.has(`${r}_${c}`) ||
            r < 0 ||
            r >= row ||
            c < 0 ||
            c >= col ||
            heights[r][c] < prevHeight
        ) {
            return;
        }
        let height = heights[r][c];
        set.add(`${r}_${c}`);
        dfs(r + 1, c, set, height);
        dfs(r, c + 1, set, height);
        dfs(r - 1, c, set, height);
        dfs(r, c - 1, set, height);
    };

    for (let i = 0; i < row; i++) {
        dfs(i, 0, pac, heights[i][0]);
        dfs(i, col - 1, atl, heights[i][col - 1]);
    }

    for (let i = 0; i < col; i++) {
        dfs(0, i, pac, heights[0][i]);
        dfs(row - 1, i, atl, heights[row - 1][i]);
    }
    // console.log(atl)
    // console.log(pac)
    let ans = [];
    for (let item of atl) {
        if (pac.has(item)) {
            ans.push(item.split("_").map(Number));
        }
    }

    return ans;
};

// 1. Go inwards from all ocean edges
// 2. From there go to all adjacent directions
// 3. Add all cells going to each oceans in different sets
// 4. Find common element in each set
