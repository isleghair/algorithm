/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse.join(' ');
};
/**
 * split(/\s+/)用于分割连续的空格
 * trim()用于去掉字符串的前后空格
 */
