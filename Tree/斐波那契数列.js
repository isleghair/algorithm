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

/**
 * 改编题——青蛙跳台阶；即初始时，p = 1
 */
var numWays = function (n) {
    let p = 1, q = 1, sum = 0;
    for (let i = 0; i < n; i++) {
        sum = (p + q) % 1000000007;
        p = q;
        q = sum;
    }
    return p;
};