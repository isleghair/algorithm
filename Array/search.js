/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const n = nums.length;
    if (n === 0) {
        return -1;
    }
    if (n === 1) {
        return nums[0] === target ? 0 : -1;
    }
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[l] <= nums[mid]) { // 左边部分有序
            if (target >= nums[l] && target < nums[mid]) { // 判断是否在有序的一半中
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else { // 右边部分有序
            if (target > nums[mid] && target <= nums[r]) { // 判断是否在有序的一半中
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([5, 1, 3], 3))
