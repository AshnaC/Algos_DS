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

//https://www.youtube.com/watch?v=CE2b_-XfVDk
var lengthOfLIS2 = function (nums) {
    let dp = [];
    dp[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(1 + dp[j], dp[i]);
            }
        }
    }
    return Math.max(...dp);
};

//O(NLog(N))
// Creating the longest subsequence
// If number > largest number in subsequence -just add the number to subsequence
// Else replace the next largest number with the given number in subsequence
// Using binary search
// This works because we are making the largest possible subarray and only replacing potential
// small elements
//https://leetcode.com/problems/longest-increasing-subsequence/solution/
var lengthOfLIS1 = function (nums) {
    let subSeq = [nums[0]];
    for (let num of nums) {
        let lastElt = subSeq.length - 1;
        if (num > subSeq[lastElt]) {
            subSeq.push(num);
        } else {
            let left = 0;
            let right = subSeq.length - 1;
            while (right > left) {
                const mid = Math.floor((left + right) / 2);
                if (subSeq[mid] >= num) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            subSeq[right] = num;
        }
    }
    return subSeq.length;
};
