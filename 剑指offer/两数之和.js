/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] === target)
            return [nums[i], nums[j]]
        if (nums[i] + nums[j] > target)
            j--;
        else
            i++;
    }
    return false;
};