//https://leetcode.com/problems/unique-paths/
//https://www.youtube.com/watch?v=IlEsdxuD4lY

// Recursion
// Number of path for a square = Number of paths from square below it + Number of paths from squares right to it
var uniquePaths = function (m, n, map = {}) {
    let key = m + "_" + n;
    if (map[key] !== undefined) {
        return map[key];
    }
    if (m == 1 || n == 1) {
        return 1;
    }
    let result = uniquePaths(m - 1, n, map) + uniquePaths(m, n - 1, map);
    map[key] = result;
    return result;
};

var uniquePaths = function (m, n) {
    let visited = {};
    const goPath = (r, c) => {
        let key = r + "_" + c;
        if (r > m || c > n) {
            return 0;
        }
        if (visited[key] != undefined) {
            return visited[key];
        }
        if (r == m || c == n) {
            return 1;
        }
        let count = goPath(r + 1, c) + goPath(r, c + 1);
        visited[key] = count;
        return count;
    };
    return goPath(1, 1);
};
// Dynamic Problem

// For last row and column the number of paths to last square is 1
// For all other its sum of below column + right row squares
// Here 0,0 represents last col and last row
// https://youtu.be/IlEsdxuD4lY?t=437

var uniquePaths2 = function (m, n) {
    let dp = [];
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

var uniquePaths = function (m, n) {
    let key = m + "_" + n;
    let map = {};
    map[key] = 1;
    for (let i = m; i > 0; i--) {
        for (let j = n; j > 0; j--) {
            key = i + "_" + j;
            if (i == m && j == n) {
                // Last elt
            } else {
                map[key] = (map[i + 1 + "_" + j] || 0) + (map[i + "_" + (j + 1)] || 0);
            }
        }
    }
    return map[1 + "_" + 1];
};
