var maxvalue = function (grid) {
    let m = grid.length, n = grid[0].length;
    let f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0)
                f[i][j] = Math.max(f[i - 1][j], f[i][j]);
            if (j > 0)
                f[i][j] = Math.max(f[i][j - 1], f[i][j]);
            f[i][j] += grid[i][j];
        }
    }
    return f[m - 1][n - 1];
}