/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const n = digits.length;
    digits[n - 1]++;
    for (let i = n - 1; i > 0; i--) {
        if (digits[i] === 10) {
            digits[i - 1]++;
            digits[i] = 0;
        } else
            return digits;
    }
    if (digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([9, 9, 9, 8, 5]));