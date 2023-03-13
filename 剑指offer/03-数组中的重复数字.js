/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return nums[i];
        map.set(nums[i], 1);
    }
};

findRepeatNumber([3, 1, 2, 3])