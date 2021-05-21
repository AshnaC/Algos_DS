/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let minVal = nums[0];
    let maxVal = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let nxt_max_prod = maxVal * nums[i];
        let nxt_min_prod = minVal * nums[i];
        minVal = Math.min(nxt_max_prod, nums[i], nxt_min_prod);
        maxVal = Math.max(nxt_max_prod, nums[i], nxt_min_prod);
        product = Math.max(product, maxVal);
        console.log(minVal, maxVal, product);
    }
    return result;
};

// We track min and max values till the iteration item
// We capture min value only to track most -ve number
// If all positive it doesn't have any relevance
