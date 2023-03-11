/**
 * @param {string} s
 * @return {number}
 */
/**
 * 统计回文的数量
 * 1、计算可能的中心，一共有2*n-1个中心
 * 2、定义中心的左右两端——l = i / 2, r = i / 2 + (i % 2) 
 * 因为中心可能是一个节点，也可能是两个节点
 * 3、从中心开始往两边拓展，满足条件的即可继续拓展，并且ans+1
 */
var countSubstrings = function (s) {
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n * 2 - 1; i++) {
        let l = i / 2, r = i / 2 + (i % 2);
        while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) {
            l--;
            r++;
            ans++;
        }
    }
    return ans;
};