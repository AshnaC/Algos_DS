var findMin = function (nums) {
    debugger;
    let left = 0;
    let right = nums.length - 1;
    while (nums[left] > nums[right]) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1; // Search to right
        } else {
            right = mid; // Search to left
        }
        console.log("nums[left]", nums[left], left);
        console.log("nums[right]", nums[right], right);
    }
    return nums[left];
};

console.log(findMin([4, 5, 6, 7, 9, 10, 11, 0, 1, 2]));
