/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const n = s.length;
    if (n % 2 != 0)
        return false;
    const pairs = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ])
    const stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || pairs.get(ch) !== stk[stk.length - 1]) {
                return false
            }
            stk.pop();
        }
        else
            stk.push(ch);
    }
    return !stk.length;
};

console.log(isValid("()"))