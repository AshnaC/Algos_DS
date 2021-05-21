/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const start = getMidPoint(nums);
    let leftIndx;
    if (target > nums[nums.length - 1]) {
        // We have to check left half
        leftIndx = bs(nums.slice(0, start), target, 0);
    } else {
        leftIndx = bs(nums.slice(start), target, start);
    }
    return leftIndx;
};

var bs = function (nums, target, start) {
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        if (nums[left] === target) {
            return start + left;
        }
        if (nums[right] === target) {
            return start + right;
        }
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return start + mid;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

var getMidPoint = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (nums[left] > nums[right]) {
        let mid = Math.floor((left + right) / 2);
        if (nums[left] > nums[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

// [4,5,6,7,8,1,2,3]
// 8
