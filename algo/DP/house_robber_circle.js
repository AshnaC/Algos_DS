var rob = function (nums) {
    if (nums.length <= 1) {
        return nums[0] || 0;
    }
    let dp1 = [];
    let dp2 = [];

    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]) || 0;

    dp2[0] = 0;
    dp2[1] = nums[1] || 0;

    for (let i = 2; i < nums.length; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
    }
    return Math.max(dp1[nums.length - 2], dp2[nums.length - 1]);
};

// Using two dp arrays
// One to track numbers starting with nums[0]
// Return second last element of dp- It should not include last element
// One to track nums starting from nums[1]
// Return last element of dp - including last element
// https://leetcode.com/problems/house-robber/
