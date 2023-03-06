/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) {
        return [];
    }
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    let ans = [], temp = intervals[0];
    for (let interval of intervals) {
        if (interval[0] <= temp[1]) {
            temp = [temp[0], Math.max(interval[1], temp[1])]
        } else {
            ans.push(temp);
            temp = interval
        }
    }
    ans.push(temp);
    return ans;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
