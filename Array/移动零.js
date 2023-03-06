/**
 * 移动零
 */
var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else {
            swap(i - count, i);
        }
    }

    function swap (i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0]));
