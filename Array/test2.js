let line = read_line();
line = line.split(" ").map(Number);
let m = line[0], A = line[1], B = line[2];
let ene = [];
let temp = []
while (m--) {
    str = read_line();
    temp = str.split(" ").map(Number);
    ene.push(temp)
}
const n = ene.length;
ene.sort((a, b) => a[0] - b[0]);
let i = 0, j = 0, ans = 0;

while (j < n) {
    while (j < n && ene[j][0] - ene[i][0] <= A) j++;
    let k = i, maxdiff = 0;
    while (k < j) {
        maxdiff = Math.max(maxdiff, Math.abs(ene[k][1] - ene[i][1]));
        k++;
    }
    if (maxdiff <= B) {
        ans = Math.max(ans, j - i);
    }
    while (i < j && ene[i + 1][0] - ene[i][0] <= A) i++;
    i++;
}
print(ans);
