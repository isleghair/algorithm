/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let low = 0, high = numbers.length - 1;
    while (low < high) {
        let mid = (low + high >>> 1);
        if (numbers[mid] > numbers[high]) {
            low = mid + 1;
        }
        else if (numbers[mid] < numbers[high]) {
            high = mid;
        }
        else
            high -= 1;
    }
    return numbers[low]
};

minArray([3, 1, 3])