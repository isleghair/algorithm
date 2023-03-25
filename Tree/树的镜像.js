/***
 * 递归的每一层交换左右子树
 */

var mirrorTree = function (root) {
    if (!root)
        return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirrorTree(root.left);
    mirrorTree(root.right)
};