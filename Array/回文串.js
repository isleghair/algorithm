/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let valid = s.toLowerCase().match(/[a-z0-9]+/g); // 转小写、去除其他非法字符等得到的数组
    if (!valid) {
        return false;
    }
    let str = valid.join(""); // 得到处理过后的字符串
    let comp = str.split("").reverse().join(""); // 先将字符串转为数组然后反转
    return str === comp
};

console.log(isPalindrome("abcba"));