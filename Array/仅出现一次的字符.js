/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = 0;
    for (const num of nums) {
        res ^= num;     // 异或操作满足交换律，因此相同的字符会得到结果0，与0异或仍是自身
    }
    return res;
};