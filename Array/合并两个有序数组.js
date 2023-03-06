/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//     let p = 0, q = 0, cur = 0;
//     const sorted = new Array(m + n).fill(0);
//     while (p < m || q < n) {
//         if (p === m) {
//             cur = nums2[q++];
//         } else if (q === n) {
//             cur = nums1[p++];
//         } else if (nums1[p] <= nums2[q]) {
//             cur = nums1[p++];
//         } else if (nums1[p] > nums2[q]) {
//             cur = nums2[q++];
//         }
//         sorted[p + q - 1] = cur;
//     }
//     console.log(sorted);
//     for (let i = 0; i < m + n; i++) {
//         nums1[i] = sorted[i];
//     }
// };

merge([1, 2, 3], 3, [4, 5, 6], 3)