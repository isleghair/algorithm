/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode (val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 * A,B先遍历自己的链表，遍历完后开始遍历对方的链表，如果相遇则返回相遇的节点，否则返回null
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null)
        return null;
    let pa = headA, pb = headB;
    while (pa !== pb) {
        pa = pa === null ? headB : pa.next;
        pb = pb === null ? headA : pb.next;
    }
    return pa;
};