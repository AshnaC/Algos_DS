// https://www.youtube.com/watch?v=RyBM56RIWrM
// https://leetcode.com/problems/counting-bits/submissions/s
var countBits = function (n) {
    let dp = [0];
    let factor = 1;
    for (let i = 1; i <= n; i++) {
        if (i == factor * 2) {
            factor = factor * 2;
        }
        dp[i] = 1 + dp[i - factor];
    }
    return dp;
};
