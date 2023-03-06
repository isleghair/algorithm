/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let num = 0, base = 1;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const element = array[i].charCodeAt() - 'A'.charCodeAt() + 1; // 查找当前这是第几个字母
        num += element * base;
        base *= 26;
    }
    return num;
};