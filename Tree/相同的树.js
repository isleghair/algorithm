var isSameTree = function (p, q) {
    if (p === null && q === null)
        return true;
    if (p === null || q === null) // 有一个节点为空返回false
        return false;
    if (p.val !== q.val)
        return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};