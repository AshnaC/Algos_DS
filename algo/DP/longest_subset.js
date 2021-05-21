/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let dp = [];
    let numsLen = nums.length;
    dp[numsLen - 1] = 1; // For last element the largest sub is always 1
    for (let i = nums.length - 2; i >= 0; i--) {
        dp[i] = 1;
        for (let k = i + 1; k < numsLen; k++) {
            if (nums[k] > nums[i]) {
                dp[i] = Math.max(1 + dp[k], dp[i]);
            }
        }
    }
    return Math.max(...dp);
};

// https://leetcode.com/problems/longest-increasing-subsequence/submissions/
// https://www.youtube.com/watch?v=cjWnW0hdF1Y
// DP task
// The longest sub starting from last elt =1
// Iterate backward till 0
// Inner loop till last element
// If next num > current num - Add 1.. Take Max
