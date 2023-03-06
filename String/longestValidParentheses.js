/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const maxLen = 0;
    const dp = new Array(s.length).fill(0);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') { //以')'结尾的字符才有效
            if (s[i - 1] === '(') { //如果前一个位置是'(' 则能与当前字符形成有效括号
                if (i - 2 >= 0) { //如果前2个位置还有字符串
                    dp[i] = dp[i - 2] + 2;
                }
                else {
                    dp[i] = 2;
                }
            }
            //以i-1结尾的有效字符在向前看1个位置 如果是'(' 则能与当前字符形成有效括号
            else if (s[i - dp[i - 1] - 1] === '(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
                }
                else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        maxLen = Math.maxLen(dp[i], maxLen);
    }
    return maxLen;
};