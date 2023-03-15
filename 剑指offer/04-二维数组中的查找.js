/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.empty == true)
        return false;
    const m = matrix.length;
    const n = matrix[0].length;
    let x = 0, y = n - 1;
    while (x < m && y >= 0) {
        if (matrix[x][y] === target)
            return true;
        if (matrix[x][y] > target)
            y--;
        else
            x++;
    }
    return false;
};

console.log(findNumberIn2DArray([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));