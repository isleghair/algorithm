// var foo = "Hello";
// (function () {
//     var bar = "world";
//     console.log(foo + bar);
// })();
// console.log(foo + bar);

// for (var i = 0; i < 3; ++i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// for (let i = 0; i < 3; ++i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// let a = [], b = {};
// console.log(a instanceof Array);

let a = [1, 2, 3];
a.push(6)
console.log(a);

let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors2)

let nums = [3, 5, 2, 8, 4, 2, 7, 5, 1]
nums.sort((a, b) => a - b)
console.log(nums);