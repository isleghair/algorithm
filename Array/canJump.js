/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let tag = [0], len = nums.length;
    if (len === 1)
        return true
    if (nums[0] === 0)
        return false;
    tag[0] = 1;
    for (let i = 0; i < len - 1; i++) {
        if (tag[i]) {
            for (let j = i; j < i + nums[i] + 1; j++) {
                tag[j] = 1;
                if (j === len - 1) {
                    return true;
                }
            }
        }
    }
    return tag[len - 1] ? true : false;
};

console.log(canJump([0, 2, 3]))
