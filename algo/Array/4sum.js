var fourSum = function (nums, target) {
    debugger;
    let out = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - 4; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j <= nums.length - 3; j++) {
            if (j !== i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = nums.length - 1;
            let twoSumTarget = target - (nums[i] + nums[j]);
            while (left < right) {
                if (left !== j + 1 && nums[left] === nums[left - 1]) {
                    left++;
                    continue;
                } else if (nums[right] === nums[right + 1]) {
                    right--;
                    continue;
                }

                let sum = nums[left] + nums[right];
                if (sum === twoSumTarget) {
                    out.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                } else if (sum > twoSumTarget) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return out;
};

console.log(fourSum([2, 2, 2, 2, 2], 8));
