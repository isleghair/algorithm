var isSubStructure = function (A, B) {
    if (!A || !B)
        return false;
    return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B) //b和a的每一个节点进行判断
};

var isSameTree = function (p, q) {
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    if (p.val !== q.val)
        return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};