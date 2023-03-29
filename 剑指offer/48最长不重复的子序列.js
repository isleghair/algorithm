/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let map = new Map(), max = 0;
    for (let i = 0, j = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i);
        }
        max = Math.max(j - i + 1, max);
        map.set(s[j], j)
    }
    return max;
};
