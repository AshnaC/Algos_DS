// https://leetcode.com/problems/longest-consecutive-sequence/submissions/

// Consider number that only starts

var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let max = 0;
    for (let num of nums) {
        let len = 1;
        if (set.has(num - 1)) {
            // This is not start of a seqeunce
        } else {
            let next = num + 1;
            while (set.has(next)) {
                len++;
                next++;
            }
        }
        max = Math.max(max, len);
    }
    return max;
};
