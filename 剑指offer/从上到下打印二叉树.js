/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const queue = [root];
    let res = []
    while (queue.length) {
        // 获取根节点，根节点出队
        let n = queue.shift();
        res.push(n.val);
        // 队头的子节点依次入队
        n.left && queue.push(n.left);
        n.right && queue.push(n.right);
    }
};