var levelOrder = function (root) {
    const ret = [];
    if (!root)
        return ret;
    const q = [];
    q.push(root);
    ret.push([]);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([])
        for (let i = 0; i < currentLevelSize; i++) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return ret;
};