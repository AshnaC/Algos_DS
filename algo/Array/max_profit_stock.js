//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function (prices) {
    let max_profit = 0;
    let min_val = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min_val = Math.min(prices[i], min_val);
        max_profit = Math.max(prices[i] - min_val, max_profit);
    }
    return max_profit;
};

// Capture min values
// Check for maximum profit
