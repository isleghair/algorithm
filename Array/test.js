
function makePalindrome (str) {
    let left = 0, right = str.length - 1;
    let changes = 0;
    let charArr = str.split(' ').map(Number);
    console.log(charArr);
    while (left <= right) {
        if (charArr[left] !== charArr[right]) {
            changes++;
            if (changes > 2) {
                return "-1";
            }

            // 将左右指针对应的字符改为较小的字符
            charArr[left] = charArr[right] = String.fromCharCode(Math.min(str.charCodeAt(left), str.charCodeAt(right)));
        }
        left++;
        right--;
    }

    return charArr.join('');
}
console.log(makePalindrome("1 3"))

let a = "1 3", b = "3 4", c = "4 5";
let ans = [];
a.split(' ').map(Number);
b.split(' ').map(Number);
c.split(' ').map(Number);
ans.push(a)
ans.push(b)
ans.push(c)
console.log(ans);
