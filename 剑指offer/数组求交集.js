function merge (a, b) {
    let numA = new Set(a), numB = new Set(b);
    return Array.from([...numA].filter(x => numB.has(x)));
}

console.log(merge([1, 2, 3], [4, 5, 2]));