/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let p = 0, q = 1, sum = 0;
    for (let i = 0; i < n; i++) {
        sum = (p + q) % 1000000007;
        p = q;
        q = sum;
    }
    return p;
};