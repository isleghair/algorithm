
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const n = nums.length;
    const result = [];
    const traceBack = (nums, start = 0, ans = []) => {
        if (ans.length === n - 1) {
            ans.push(nums[start]);
            result.push(ans);
            return
        }
        for (let i = start; i < n; i++) {
            let val = nums[i];
            let temp = nums[start];
            nums[start] = val;
            nums[i] = temp;
            traceBack(nums, start + 1, ans.concat(val))
            nums[i] = val;
            nums[start] = temp;
        }
    }
    traceBack(nums);
    return result;
};

console.log(permute([1, 2, 3]));
