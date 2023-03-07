/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null)
        return false;
    let pa = headA, pb = headB;
    while (pa !== pb) {
        pa = pa === null ? headB : pa.next;   // 链表a遍历完自己后开始去遍历b，等两个人走完相同路的时候返回结果，如果相遇返回相遇点，否则返回null，因为两个人都遍历结束了
        pb = pb === null ? headA : pb.next;
    }
    return pa;
};