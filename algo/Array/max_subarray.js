/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max_Sum = nums[0];
    let current_Sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        current_Sum = Math.max(current_Sum + nums[i], nums[i]);
        max_Sum = Math.max(current_Sum, max_Sum);
    }
    return max_Sum;
};
