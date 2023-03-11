/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
    let res = [], counter = 0;
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                res.push(j - i);
                break;
            }
            if ((j === temperatures.length - 1) && (temperatures[j] <= temperatures[i])) {
                res.push(0);
            }
        }
    }
    res.push(0)
    return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN('10'));
console.log(isNaN('blue'));