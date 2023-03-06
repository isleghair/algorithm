/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let r = 0, w = 0, b = 0;
    for (let i = 0; i < nums.length; i++) {
        switch (nums[i]) {
            case 0: r++;
                break;
            case 1: w++;
                break;
            case 2: b++;
                break;
        }
    }
    for (let i = 0; i < r + w + b; i++) {
        if (i < r)
            nums[i] = 0;
        else if (i < r + w)
            nums[i] = 1;
        else
            nums[i] = 2;
    }
    return nums;
};
