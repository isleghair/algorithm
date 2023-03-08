function deepClone (obj, hash = new WeakMap()) {
    // 如果是null或者undefined我就不进行拷贝操作
    if (obj == null) return obj;

    if (obj instanceof Date) return new Date(obj);

    if (obj instanceof RegExp) return new RegExp(obj);

    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== 'object') return obj;

    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj);

    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    let cloneObj = new obj.constructor();

    hash.set(obj, cloneObj);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}

let obj = { name: 1, address: { x: 100 } };
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
console.log(obj);

let num = 1;
console.log(typeof (num));