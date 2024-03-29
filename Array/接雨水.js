/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    if (n === 0)
        return 0;
    let leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    // 统计每个元素左边的最高位置
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    // 统计每个元素右边的最高位置
    let rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    // 计算结果
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += (Math.min(leftMax[i], rightMax[i]) - height[i]);
    }
    return ans;
};