/**
 * @param {number} n
 * @return {boolean}
 */
let getNext = (n) => {
    return n.toString().split("").map(i => i ** 2).reduce((a, b) => a + b) //得到下一个数字
}

var isHappy = function (n) {
    let slow = n;
    let fast = getNext(n);
    while (fast !== 1 && fast !== slow) { //快慢指针相遇的时候表示进入死循环，fast等于1的时候代表找到了快乐数
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};