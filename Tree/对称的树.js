/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return root === null ? true : recur(root.left, root.right)
};

const recur = function (p, q) {
    if (p === null && q === null)   // 两个节点同时为空时，返回true
        return true;
    if (p === null || q === null || p.val !== q.val)   // 有一个节点为空或两个节点不想等，返回false
        return false;
    return recur(p.left, q.right) && recur(p.right, q.left)   // 递归判断左边的left节点和右边的right节点，以及左边的right节点和右边的left节点
}