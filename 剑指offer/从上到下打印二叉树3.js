/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const ret = [];
    if (!root) {
        return [];
    }
    const q = [];
    let isOrderLeft = true;
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 0; i < currentLevelSize; i++) {
            const node = q.shift();
            if (isOrderLeft) {
                ret[ret.length - 1].push(node.val);
            }
            else {
                ret[ret.length - 1].unshift(node.val)
            }
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        isOrderLeft = !isOrderLeft;
    }
    return ret
};