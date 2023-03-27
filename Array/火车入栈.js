/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let i = 0;
    let stack = [];
    for (const num of pushed) {
        stack.push(num);
        while (stack.length) {
            if (stack[stack.length - 1] === popped[i]) {
                stack.pop();
                i++;
            }
            else
                break;
        }
    }
    return stack.length === 0 ? true : false;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));