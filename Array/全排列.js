// 回溯算法 leetcode版本
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//     const res = [], path = [];
//     backtracing(nums, nums.length, [])
//     return res;

//     function backtracing (n, k, used) {
//         if (path.length === k) {
//             res.push(Array.from(path))
//             return;
//         }
//         for (let i = 0; i < k; i++) {
//             if (used[i]) continue;   // 使用used数组标记选过的数字
//             path.push(n[i]);
//             used[i] = true;
//             backtracing(n, k, used); //回溯
//             path.pop();
//             used[i] = false;
//         }
//     }
// };


// const a = new String("saff")
// let b = "123456"
// b = b.slice(0, b.length - 1)
// b = b.concat("666")
// console.log(b);


// const _permute = string => {
//     // 补全代码
//     const res = [];
//     let path = "";
//     backtracing(string, string.length, [])
//     return res;

//     function backtracing (n, k, used) {
//         if (path.length === k) {
//             res.push(path);
//             return;
//         }
//         for (let i = 0; i < k; i++) {
//             if (used[i])
//                 continue;
//             path = path.concat(n[i])
//             used[i] = true;
//             backtracing(n, k, used);
//             used[i] = false;
//             path = path.slice(0, path.length - 1)
//         }
//     }
// }

// console.log(_permute("abc"));

// let f = {
//     name: "hao",
//     age: 18,
//     setname: function (name) {
//         this.name = name
//     }
// }
// f.setname("leghair")
// console.log(f.name);



/**
 * 深、浅拷贝
 */
// const a1 = [1, 2, 3, { name: "lihua", age: 15 }]
// // const [...a2] = a1;
// const a2 = [...a1];
// a1.push(6)
// a1[3].age = 18;
// a1[3].name = "xiaoming"
// console.log(a1);
// console.log(a2);

// const a = { inf: { name: "xiaoli" }, add: "chengdu" }
// const a = [{ name: "xiaoming", age: 18 }, 2]
// const b = [...a];
// a[0].name = "ligang"
// a[0].age = 8
// console.log(b);


/**
 * ===和object.is的区别
 */
// if (+0 === -0) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// console.log(Object.is(+0, -0));

/**
 * 原型和原型链
 */
const arr = new Array;

console.log(arr.__proto__ === Array.prototype);

/**
 * 
 */

const add = (a, b) => a + b;
console.log(add(2, 3));