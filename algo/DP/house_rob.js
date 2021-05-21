/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp = [0];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + (dp[i - 2] || 0));
    }
    return dp[nums.length - 1];
};
