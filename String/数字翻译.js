/**
 * @param {number} num
 * @return {number}
 * 翻译前判断一下，当前的字母和前一个字母的组合能不能直接翻译，如果能，有两种情况，dp[i - 1] + dp[i - 2]，否则就是dp[i] = dp[i - 1];
 */
var translateNum = function (num) {
    let str = num.toString();
    let n = str.length;
    let dp = new Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        let temp = Number(str[i - 2] + str[i - 1]);
        if (temp > 9 && temp < 26)
            dp[i] = dp[i - 1] + dp[i - 2];
        else
            dp[i] = dp[i - 1];
    }
    return dp[n];
};

// console.log(translateNum(25));

let a = [];
let b = [1, 2, 3], c = [2, 3, 4]
a.push(b);
a.push(c)
console.log(a);
