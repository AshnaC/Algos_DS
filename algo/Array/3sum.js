var threeSum = function (nums, target) {
    debugger;
    nums = nums.sort((a, b) => a - b);
    let out = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        const pair = twoSum(nums.slice(i + 1), target - nums[i]);
        pair.forEach(elt => {
            out.push([nums[i], ...elt]);
        });
    }
    return out;
};

var twoSum = function (nums, target) {
    let ans = [];
    let left = 0;
    let right = nums.length - 1;
    while (right > left) {
        if (nums[left] === nums[left - 1]) {
            left++;
            continue;
        }
        if (nums[right] === nums[right + 1]) {
            right--;
            continue;
        }

        let sum = nums[left] + nums[right];
        if (sum === target) {
            ans.push([nums[left], nums[right]]);
            right--;
            left++;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));

// ALL together
var threeSum2 = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let out = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            // Skipping duplicates
            continue;
        }
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (right > left) {
            if (left !== i + 1 && nums[left] === nums[left - 1]) {
                left++; // Skipping duplicates
                continue;
            }
            if (nums[right] === nums[right + 1]) {
                right--; // Skipping duplicates
                continue;
            }
            let sum = nums[right] + nums[left];
            if (sum === target) {
                out.push([nums[right], nums[left], nums[i]]);
                left++;
                right--;
                continue;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return out;
};
