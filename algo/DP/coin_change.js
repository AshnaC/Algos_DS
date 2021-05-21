/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) return 0;
    let dp = [];
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        dp[i] = amount + 1;
        for (let coin of coins) {
            // Check only if given amount greater than the coin we considered
            if (i >= coin) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

// https://leetcode.com/problems/coin-change/submissions/
// https://www.youtube.com/watch?v=1R0_7HqNaW0
// Iterate through all possible amounts less than given target
// Calculate minimum number of coins for each amount
// It will be 1- min number of coins for the rest of the amount
// This will already be calculated
// Set an impossible high vale amount+1 (can be anything) for each amount - Not possible
// This is to compare with result values
