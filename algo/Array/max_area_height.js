/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max_area = 0;
    let left = 0;
    let right = height.length - 1;
    while (right > left) {
        let area = (right - left) * Math.min(height[left], height[right]);
        max_area = Math.max(area, max_area);
        if (height[right] > height[left]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
};
