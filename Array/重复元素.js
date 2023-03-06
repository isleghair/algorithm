/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = new Map();
    let res = [];
    for (const s of nums1) {  // 统计nums1中出现的数字及频率
        if (!map.has(s)) {
            map.set(s, 1);
        } else
            map.set(s, map.get(s) + 1)
    }
    for (const arr of nums2) {
        if (map.has(arr) && map.get(arr) > 0) {
            res.push(arr);
            map.set(arr, map.get(arr) - 1);
        }
    }
    return res;
};
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));