/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxRun = 0;
    for (let i = 0; i <= maxRun; i++) {
        let nxtStep = i + nums[i];
        maxRun = Math.max(nxtStep, maxRun);
        if (maxRun >= nums.length - 1) {
            return true;
        }
    }
    return false;
};

// https://www.youtube.com/watch?v=Yan0cv2cLy8
// https://leetcode.com/problems/jump-game/

// MaxRun is the right most point we can jump for the current
// Array index we are conisidering
// We iterate till the right most point to see if we can jump further
// from there
// Once it crosses nums.length - we reached end
// The failure case occurs when from maxPoint we can do 0 jumps
// And no points before that can jump beyond that point

// ********************
//Jumping Backward

// Idea is change till where we have to reach in each step

// First goal is last index
// If from prev index we can reach last index - Fix goal as prev Index
// Continue till last element is reach
// And if we reach 0 - means we can move from front to back

var canJump = function (nums) {
    let goal = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
};
