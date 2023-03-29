/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        let temp = 0;
        while (nums[i] % 2 === 1 && i < j)
            i++;
        while (nums[j] % 2 === 0 && i < j)
            j--;
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    return nums;
};
let a = exchange([1, 3, 5])
console.log(a);