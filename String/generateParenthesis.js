/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let set = new Set(['()']);
    for (let c = 2; c <= n; c++) {
        let nextSet = new Set();
        for (const s of set) {
            for (let j = 0; j <= s.length; j++) {
                nextSet.add(s.slice(0, j) + '()' + s.slice(j));
            }
        }
        set = nextSet;
    }
    return [...set]
};