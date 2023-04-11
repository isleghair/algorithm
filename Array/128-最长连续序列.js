/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let map = new Map();
    let max = 0;
    for (const num of nums) {
        if (!map.has(num)) {
            let leftLen = map.get(num - 1) || 0;  // 获取左邻居所在序列的长度 
            let rightLen = map.get(num + 1) || 0;  // 获取右邻居所在序列的长度 
            let curLen = leftLen + 1 + rightLen;  // 新序列的长度
            map.set(num, curLen);  // 将自己存入 map
            max = Math.max(max, curLen);  // 和 max 比较，试图刷新max
            map.set(num - leftLen, curLen);  // 更新新序列的左端数字的value
            map.set(num + rightLen, curLen);  // 更新新序列的右端数字的value
        }
    }
    return max;
};
