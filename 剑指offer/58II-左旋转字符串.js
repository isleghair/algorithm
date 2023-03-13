/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    const reverse = (str, left, right) => {
        let strArr = str.split("");
        for (; left < right; left++, right--) {
            [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        }
        return strArr.join("")
    }
    // 先反转前一部分，再反转后一部分，最后将整个数组反转
    s = s.reverse(s, 0, n - 1);
    s = s.reverse(s, n, s.length - 1)
    return s.reverse(s, 0, s.length - 1)
};