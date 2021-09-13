//https://leetcode.com/problems/word-search/submissions/

var exist = function (board, word) {
    let width = board.length;
    let height = board[0].length;
    let visited = {};

    const dfs = (r, c, index) => {
        let key = r + "_" + c;
        if (r < 0 || c < 0 || r == width || c == height || visited[key]) {
            return false;
        }

        let char = board[r][c];

        if (char !== word[index]) {
            return false; // No need to continue
        }

        if (char === word[index] && index == word.length - 1) {
            return true; // Found a match and length matched
        }

        visited[key] = true;

        if (
            dfs(r + 1, c, index + 1) ||
            dfs(r, c + 1, index + 1) ||
            dfs(r, c - 1, index + 1) ||
            dfs(r - 1, c, index + 1)
        ) {
            return true;
        }
        visited[key] = false;
        return false;
    };

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
