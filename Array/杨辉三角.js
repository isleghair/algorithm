/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const ret = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ret[i - 1][j - 1] + ret[i - 1][j];  // 根据上一行的计算结果得到下一行
        }
        ret.push(row)
    }
    return ret;
};