/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if ((idx === candidates.length))
            return;
        if (target === 0) {
            ans.push(combine);
            return;
        }
        dfs(target, combine, idx + 1);
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
        }
    }
    dfs(target, [], 0);
    return ans;
};

console.log(combinationSum([8, 7, 4, 3], 11));