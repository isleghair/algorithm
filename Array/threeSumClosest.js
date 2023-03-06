/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let ans = 0;
    let res = Number.MAX_SAFE_INTEGER;
    const len = nums.length;
    if (nums == null || len < 3)
        return ans;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (Math.abs(sum - target) <= Math.abs(res - target))
                res = sum;
            if (sum > target)
                R--;
            else if (sum < target)
                L++;
            else
                return sum;
        }
    }
    return res;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))