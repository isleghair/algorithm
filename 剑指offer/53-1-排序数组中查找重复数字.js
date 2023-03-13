/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] > target || (lower) && nums[mid] >= target) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}


var search = function (nums, target) {
    let ans = 0;
    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false) - 1;
    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        ans = rightIndex - leftIndex + 1;
    }
    return ans;
};