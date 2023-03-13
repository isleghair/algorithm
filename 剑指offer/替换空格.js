/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let s = s.split("");
    let oldLen = s.length;
    let countSpace = 0;
    // 统计空格的数量
    for (let i = 0; i < oldLen; i++) {
        if (s[i] === ' ') countSpace++;
    }
    // 新数组的长度增加空格数*2
    s.length += countSpace * 2;
    // 从后开始遍历移动
    for (let i = oldLen - 1, j = s.length - 1; i >= 0; i--, j--) {
        if (s[i] !== ' ') s[j] = s[i];
        else {
            s[j - 2] = "%";
            s[j - 1] = "2";
            s[j] = "0"
            j -= 2;
        }
    }
    return s.join('')
};

