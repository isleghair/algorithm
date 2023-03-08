/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length >> 1];
};

const map = new Map();
map.set("a", 1).set("b", 4).set("c", 2)
const num = Array.from(map)
num.sort((a, b) => b[1] - a[1])
console.log(num[0][1]);