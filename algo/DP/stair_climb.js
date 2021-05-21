/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

// https://leetcode.com/problems/climbing-stairs/submissions/
// It is a dynamic problem
// To reach a stair, we can reach previous stair and take one step
// Or reach 2 stairs before and take 2 steps
