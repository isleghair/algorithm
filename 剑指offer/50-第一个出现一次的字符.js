var firstUniqChar = function (s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return ch;
        }
    }
    return ' ';
};

var firstUniqChar = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        let a = s.charAt(i);
        if (map.has(a)) {
            let m = map.get(a)
            map.set(a, m + 1)
            continue
        }
        map.set(a, 1)
    }
    for (let i = 0; i < s.length; i++) {
        let a = s.charAt(i);
        if (map.get(a) === 1)
            return a
    }
};

console.log(firstUniqChar("sdsdfghgh"));
