//https://leetcode.com/problems/number-of-islands/submissions/
// https://www.youtube.com/watch?v=pV2kpPD66nEs
//https://leetcode.com/problems/number-of-islands/discuss/391717/JavaScript-DFS-56ms-very-easy-to-understand
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid) {
        return 0;
    }
    let count = 0;
    let [row, col] = [grid.length, grid[0].length];
    let visited = {};

    const dfs = (r, c) => {
        // Out of bound- Land hit - Already added to some land
        if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] == "0" || visited[`${r}_${c}`]) {
            return;
        }
        visited[`${r}_${c}`] = true;
        dfs(r + 1, c);
        dfs(r, c + 1);
        dfs(r - 1, c);
        dfs(r, c - 1);
    };

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === "1" && !visited[`${r}_${c}`]) {
                dfs(r, c);
                // Number of islands
                count++;
                visited[`${r}_${c}`] = true;
            }
        }
    }
    return count;
};
