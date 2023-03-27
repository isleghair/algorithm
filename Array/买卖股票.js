/**
 * @param {number[]} prices
 * @return {number}
 * 记录到目前价格为止的最低价格，然后判断
 */
var maxProfit = function (prices) {
    let low = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i]);
        profit = Math.max(profit, prices[i] - low);
    }
    return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Number.MAX_VALUE;
    let profit = Number.MIN_VALUE;
    for (const price of prices) {
        profit = Math.max(price - minPrice, profit);
        minPrice = Math.min(price, minPrice)
    }
    return profit;
};

