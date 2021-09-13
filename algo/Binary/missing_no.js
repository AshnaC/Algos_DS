//https://leetcode.com/problems/missing-number/submissions/
var missingNumber = function (nums) {
    let sum = (nums.length * (nums.length + 1)) / 2;
    for (let num of nums) {
        sum = sum - num;
    }
    return sum;
};

var missingNumber = function (nums) {
    let set = new Set(nums);
    for (let num of nums) {
        if (num == 0) {
            if (!set.has(num + 1)) {
                return num + 1;
            }
        } else if (num == nums.length) {
            if (!set.has(num - 1)) {
                return num - 1;
            }
        } else {
            if (!set.has(num - 1)) {
                return num - 1;
            } else if (!set.has(num + 1)) {
                return num + 1;
            }
        }
    }
};

// XOR to itself gives 0
// Only missing index value will the value in xor
// https://leetcode.com/problems/missing-number/discuss/69786/3-different-ideas%3A-XOR-SUM-Binary-Search.-Java-code
// Check comments

var missingNumber = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        xor = xor ^ i ^ nums[i];
    }
    return xor;
};
