var myAtoi = function (s) {
    s = s.trim();
    let sign = 1;
    let val = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " " && !isNaN(s[i])) {
            val = val * 10 + Number(s[i]);
        } else {
            if (i == 0 && (s[0] === "-" || s[0] === "+")) {
                sign = Number(s[0] + 1);
                continue;
            }
            break;
        }
    }
    // Handling upper bound as leet-code
    if (val >= 2 ** 31) {
        val = 2 ** 31;
        if (sign === 1) {
            val--;
        }
    }
    return val * sign;
};

//https://leetcode.com/problems/string-to-integer-atoi/submissions/

var myAtoi = function (s) {
    s = s.trim();
    if (!s) {
        return 0;
    }
    let i = 0;
    let sign = 1;

    if (s[i] == "-") {
        sign = -1;
        i++;
    } else if (s[i] == "+") {
        sign = 1;
        i++;
    }
    let ans = 0;
    for (; i < s.length; i++) {
        let num = s[i].charCodeAt() - "0".charCodeAt();
        if (num > 9 || num < 0) {
            return sign * ans;
        }

        if (ans >= 2147483648 / 10 || ans >= (2147483648 - num) / 10) {
            return sign == 1 ? 2147483647 : -2147483648;
        }
        ans = ans * 10 + num;
    }

    return sign * ans;
};

//O(n) O(n)
var firstMissingPositive = function (nums) {
    let set = new Set(nums);
    let i = 0;
    for (i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return i++;
};

//O(n) O(1)
var firstMissingPositive = function (nums) {
    let len = nums.length;
    // Make all negative and grater than length values as 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num < 0 || num > len) {
            nums[i] = 0;
        }
    }
    // Mark all encountered numbers
    // by adding len+1 to the index number
    // We are deriving index by taking remiander of len-1 for all the len+1 we added

    for (let i = 0; i < nums.length; i++) {
        let idx = (nums[i] % (len + 1)) - 1;
        if (idx >= 0 && idx < len) {
            nums[idx] = nums[idx] + len + 1;
        }
    }

    let i = 0;
    // Check if number > len+1 - we nullified all llarge number in top
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < len + 1) {
            return i + 1;
        }
    }

    return i + 1;
};

var firstMissingPositive = function (nums) {
    let len = nums.length;
    // Make all negative and grater than length values as 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num <= 0 || num > len) {
            nums[i] = len + 1;
        }
    }

    // Mark all encountered numbers
    // my making it negative

    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1;
        if (idx >= 0 && idx < len && nums[idx] > 0) {
            // Avoid double negation for duplicates
            nums[idx] = nums[idx] * -1;
        }
    }

    let i = 0;
    // Check if number > len+1 - we nullified all llarge number in top
    for (i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            return i + 1;
        }
    }

    return i + 1;
};