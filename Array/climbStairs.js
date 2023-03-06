/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const p = 0, q = 0, r = 1;
    for (let i = 0; i < n - 1; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}
