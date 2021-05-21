var combinationSum4 = function (nums, target, map = {}) {
    if (map[target] !== undefined) {
        return map[target];
    }
    if (target === 0) {
        return 1;
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            count = count + combinationSum4(nums, target - nums[i], map);
        }
    }
    map[target] = count;
    return count;
};

// https://leetcode.com/problems/combination-sum-iv/
// https://youtu.be/dw2nMCxG0ik?t=230
// https://www.youtube.com/watch?v=dw2nMCxG0ik
// Recursive with memoization
// Iterate through all numbers
// Increase count if combination results in target=0

var combinationSum4 = function (nums, target) {
    let dp = [];
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        dp[i] = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] = dp[i] + dp[i - nums[j]];
            }
        }
    }
    return dp[target];
};

// Using Dynamic problem
// Iterate till target, for each sum iterate through nums till it is greater than target
