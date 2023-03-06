/**
 * @param {number[]} nums
 * @return {number[][]}
 * 递归
 */
var subsets = function (nums) {
    let t = [], ans = [];
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]); //选择加入当前这个数
        dfs(cur + 1);
        t.pop(t.length - 1); //选择不加入，并且复原t数组
        dfs(cur + 1);
    }
    dfs(0);
    return ans;
};