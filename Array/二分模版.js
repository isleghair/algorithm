/**
 * 二分法的模版代码
 */

const mid = function (numns) {
    let left = start, right = end, mid = (left + right) >> 1;
    let target;
    while (left <= right) {
        mid = (left + right) >> 1;
        if (numns[mid] === target) {
            return res;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        }
    }
}

/**
 * 寻找一个数的平方根
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2)
        return x;
    let left = 2, right = x >> 1, mid = 0;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (mid * mid === x)
            return mid;
        if (mid * mid < x) {
            if (mid + 1 > x / (mid + 1))
                return mid;
            left = mid + 1;
        }
        if (mid * mid > x)
            right = mid - 1;
    }
    return mid;
};

console.log(mySqrt(10));

