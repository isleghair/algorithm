/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let mark = new Array(nums.length + 1).fill(0);
    for (const num of nums) {
        mark[num]++;
    }
    for (let i = 0; i < nums.length + 1; i++) {
        if (mark[i] === 0)
            return i;
    }
    return null;
};

console.log(missingNumber([1, 2, 3, 1, 0]));
